# CSS Animations

CSS Animations is the newest feature of React Native Reanimated 4 that's can be used for spinners, skeleton loaders, and microanimations triggered by a state change.

In this lesson you're going to implement a shake animation using CSS Animations. This type of animation draws can user's attention to part of the UI.

## Step 1 - Create a shake animation using CSS Animations

https://github.com/user-attachments/assets/f1cfee5c-a516-480a-bdfc-eb9cb29bf844

<details>
<summary>
  <b>[1]</b> Change the <code>View</code> wrapping an Icon component to an <code>Animated.View</code>. Make sure to import <code>Animated</code> from <code>react-native-reanimated</code> package.
</summary>

```jsx
import Animated from "react-native-reanimated";

export function Star({ size = 16 }) {
  return (
    <Animated.View style={{}}>
      <Icon name="star" size={size} color="#475569" />
    </Animated.View>
  );
}
```

</details>
<br />

<details>
<summary>
  <b>[2]</b> Add <code>animationName</code> to <code>style</code> of the <code>Animated.View</code>. Add keyframes (as a JavaScript object) that defines rotation the view slightly from left to right from `0%` to `100%` every `20%` or so. You'll need to use <code>transform</code> property for this. Also, set the duration of the animation to 2.5 seconds.
</summary>
<br/>

Play around with the animation as you like. The following snippet is just an example.

```jsx
<Animated.View
  style={{
    animationName: {
      "0%": { transform: [{ rotate: "0deg" }] },
      "15%": { transform: [{ rotate: "7deg" }] },
      "20%": { transform: [{ rotate: "-10deg" }] },
      "25%": { transform: [{ rotate: "10deg" }] },
      "35%": { transform: [{ rotate: "-7deg" }] },
      "40%": { transform: [{ rotate: "0deg" }] },
      "100%": { transform: [{ rotate: "0deg" }] },
    },
    animationDuration: "2.5s",
  }}
>
```

</details>
<br />

<details>
<summary>
  <b>[3]</b> Make the animation repeat indefinitely.
</summary>

```jsx
<Animated.View
  style={{
    // ...
    animationIterationCount: "infinite",
  }}
>
```

</details>
<br />

<details>
<summary>
  <b>[4]</b> Use the animation timing function of your choice.
</summary>

```jsx
<Animated.View
  style={{
    // ...
    animationTimingFunction: "ease-in-out",
  }}
>
```

</details>
<br />

## Next step

**Go to: [CSS Transitions](../2_CSSTransitions/)**
