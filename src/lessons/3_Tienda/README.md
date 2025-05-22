# Tienda

This lesson reinforces the learning from the first two examples in a real-life scenario. We'll use [CSS Transitions](https://docs.swmansion.com/react-native-reanimated/docs/next/category/css-transitions) to create the header animation and [CSS Animations](https://docs.swmansion.com/react-native-reanimated/docs/next/category/css-animations) for an animation that draws user attention.

## Step 1 – Animate the header when focused

<details>
<summary>
  <b>[1]</b> When the search bar is focused, the header should fade out and slide up using CSS Transitions. Change the <code>View</code> to an <code>Animated.View</code>, use <code>transitionProperty</code> to animate <code>opacity</code> and <code>marginTop</code> properties. Don't forget to set <code>transitionDuration</code>. Optionally use <code>transitionTimingFunction</code> to control the animation timing.
</summary>

<br/>

```jsx
<Animated.View
  style={[
    styles.header,
    {
      transitionProperty: ["opacity", "marginTop"],
      transitionDuration: 200,
      transitionTimingFunction: "ease-in-out",
      opacity: isFocused ? 0 : 1,
      marginTop: isFocused && headerHeight ? -headerHeight : 0,
    },
  ]}
  {/* ... */}
>
```

</details>

<br/>

<details>
<summary>
  <b>[2]</b> Use <code>createAnimatedComponent</code> to define an animatable Pressable.
</summary>

<br/>

```jsx
import Animated from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Header() {
  {/*...*/}
  return (
    {/*...*/}
    <AnimatedPressable onPress={handleCancel} style={styles.button}>
  )
}
```

</details>

<br/>

<details>
<summary>
  <b>[3]</b> Animate the <code>width</code> of the Cancel button from <code>0</code> to <code>50</code> when search bar is focused. Also, animate <code>marginLeft</code> from <code>0</code> to <code>8</code> to adjust the position of the button. Use <code>transitionProperty</code>, <code>transitionDuration</code> and <code>transitionTimingFunction</code> to control the transition.
</summary>

<br/>

```jsx
<AnimatedPressable
  {/* ... */}
  style={[
    styles.button,
    {
      transitionProperty: ["width", "marginLeft"],
      transitionDuration: 200,
      transitionTimingFunction: "ease-in-out",
      width: isFocused ? 50 : 0,
      marginLeft: isFocused ? 8 : 0,
    },
  ]}
>
```

</details>

<br/>

## Next step

**Go to: [Circle Gestures](../4_CircleGestures/)**