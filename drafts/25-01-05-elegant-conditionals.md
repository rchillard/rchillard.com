
I think a lot about code quality and system maintainability, especially because I often look at code I wrote only a month ago and wrinkle my nose.  In this post, I'll revisit fairly simple code I wrote 7 years ago.  Let's explore how we can improve it.

Conditional logic seems to trip up the human mind, because even just a few layers provides so many possible execution branches that it's hard to reason around.

I'd like to unpack my thought process by evaluating multiple options for expressing readable conditional logic.  

I went through this exercise while evaluating how to re-implement my background for this blog as a vanilla web component. Very simply, this web component is supposed to detect the client's time and then assign certain CSS styles based on the hour, styles which correspond to the time of day.

## Original code:
Here's the code I wrote back in 2018:

```
const hour = new Date().getHours();

let background = { backgroundColor: "gray" };

if (hour >= 5 && hour <= 8) {
    background = styles.dawn;
} else if (hour > 8 && hour < 18) {
    background = styles.day;
} else if (hour >= 18 && hour <= 21) {
    background = styles.dusk;
} else {
    background = styles.night;
}
```

## Using switch with true:

```
switch (true) {
  case hour >= 5 && hour <= 8:
    background = styles.dawn;
    break;
  case hour > 8 && hour < 18:
    background = styles.day;
    break;
  case hour >= 18 && hour <= 21:
    background = styles.dusk;
    break;
  default:
    background = styles.night;
}
```

## Using a function with an array of conditions:


```
const conditions = [
  { check: hour => hour >= 5 && hour <= 8, style: styles.dawn },
  { check: hour => hour > 8 && hour < 18, style: styles.day },
  { check: hour => hour >= 18 && hour <= 21, style: styles.dusk },
  { check: () => true, style: styles.night }, // default case
];

background = conditions.find(({ check }) => check(hour)).style;
```

## Using a utility function with early returns:

```
function getBackgroundStyle(hour) {
  if (hour >= 5 && hour <= 8) return styles.dawn;
  if (hour > 8 && hour < 18) return styles.day;
  if (hour >= 18 && hour <= 21) return styles.dusk;
  return styles.night; // default case
}

background = getBackgroundStyle(hour);
```


## Using an array for ranges:

```
const ranges = [
  { start: 5, end: 8, style: styles.dawn },
  { start: 8, end: 18, style: styles.day },
  { start: 18, end: 21, style: styles.dusk },
  { start: 21, end: 24, style: styles.night }, // Handle the night case
  { start: 0, end: 5, style: styles.night },
];

background = ranges.find(({ start, end }) => hour >= start && hour < end).style;
```