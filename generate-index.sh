#!/bin/bash

DIR=./build/technology/

# Load templates once
HEAD_HTML=$(<./src/html/template-header.html)
MAIN_HTML=$(<./src/html/template-index.html)
FOOT_HTML=$(<./src/html/template-footer.html)

# Function to trim the first path from the second
trim_path() {
    local base="$1"
    local full_path="$2"
    
    # Check if the full path starts with the base path
    if [[ "$full_path" == "$base"* ]]; then
        # Trim the base path from the full path
        result="${full_path#$base}"

        # Remove leading slash if it exists
        echo "${result#/}"
    else
        # If the full path doesn't start with the base, return the full path
        echo "$full_path"
    fi
}

generate_markdown() {
    local post="$1"
    local filter_dir="$2"
    local post_title=$(grep -oP 'title: "\K[^"]+' "$post")
    local post_link=$(trim_path "$filter_dir" "$post")
    local post_as_markdown="- [$post_title](${post_link%.md}.html)"
    echo $post_as_markdown
}

mapfile -t year_array < <(find $DIR -mindepth 1 -maxdepth 1 -type d)

for year_dir in "${year_array[@]}"; do
    echo "Searching year: $year_dir"
    posts_in_the_year=()

    mapfile -t month_array < <(find $year_dir -mindepth 1 -maxdepth 1 -type d | sort)

    for month_dir in "${month_array[@]}"; do
        echo "---Found month: $month_dir"
        posts_in_the_month=()

        mapfile -t day_array < <(find $month_dir -mindepth 1 -maxdepth 1 -type d | sort)

        for day_dir in "${day_array[@]}"; do
            echo "----Found day: $day_dir"
            posts_in_the_day=()

            mapfile -t post_array < <(find $day_dir -mindepth 1 -maxdepth 1 -type f -name "*.md" | sort)

            for post in "${post_array[@]}"; do
                post_title=$(grep -oP 'title: "\K[^"]+' "$post")
                post_date=$(grep -oP 'date: "\K[^"]+' "$post")
                echo "-----Found post: $post titled $post_title from $post_date"

                if [[ "$file_name" != "index.md" ]]; then
                    posts_in_the_day+=($post)
                    posts_in_the_month+=($post)
                    posts_in_the_year+=($post)
                fi
                
            done
            # You have all the posts for this day

            index_file_for_day="$day_dir/index.md"
            truncate -s0 $index_file_for_day

            for post in "${posts_in_the_day[@]}"; do
                post_as_markdown=$(generate_markdown $post $day_dir)
                echo $post_as_markdown >> $index_file_for_day
            done
            
        done
        # You have all the posts for this month

        index_file_for_month="$month_dir/index.md"
        truncate -s0 $index_file_for_month

        for post in "${posts_in_the_month[@]}"; do
            post_as_markdown=$(generate_markdown $post $month_dir)
            echo $post_as_markdown >> $index_file_for_month
        done

    done
    # You have all the posts for this year

    index_file_for_year="$year_dir/index.md"
    truncate -s0 $index_file_for_year

    for post in "${posts_in_the_year[@]}"; do
        post_as_markdown=$(generate_markdown $post $year_dir)
        echo $post_as_markdown >> $index_file_for_year
    done

done