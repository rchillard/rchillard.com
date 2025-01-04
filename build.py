from html.parser import HTMLParser
import time

class MyHTMLParser(HTMLParser):

    def __init__(self):
        super().__init__()
        self.utc_seconds = int(time.time())
        self.new_href = f"css/styles.css?v={self.utc_seconds}"
        self.updated_html = ""

    def handle_starttag(self, tag, attrs):
        if tag == "link":
            attribute_dictionary = dict(attrs)
            if(attribute_dictionary.get("rel") == "stylesheet"):
                if(attribute_dictionary.get("href") == "css/styles.css"):
                    attribute_dictionary["href"] = self.new_href

                # Rebuild the tag with updated attributes
                updated_attrs = " ".join(f'{key}="{value}"' for key, value in attribute_dictionary.items())
                self.updated_html += f"<{tag} {updated_attrs}>"
                print(self.updated_html)
        else:
            # Add unmodified tags
            self.updated_html += f"<{tag} {' '.join(f'{key}="{value}"' for key, value in attrs)}>"


    def handle_endtag(self, tag):
        self.updated_html += f"</{tag}>"

    def handle_data(self, data):
        self.updated_html += data

    def handle_startendtag(self, tag, attrs):
        self.updated_html += f"<{tag} {' '.join(f'{key}="{value}"' for key, value in attrs)}/>"


# Read the HTML from the file
with open("test-index.html", "r", encoding="utf-8") as file:
    html_content = file.read()

parser = MyHTMLParser()
parser.feed(html_content)

# Write the updated HTML back to the file
with open("test-index-1.html", "w", encoding="utf-8") as file:
    file.write(parser.updated_html)

# print(html_content)