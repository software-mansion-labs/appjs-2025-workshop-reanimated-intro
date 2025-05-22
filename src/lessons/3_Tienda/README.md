# Tienda

This lesson reinforces the learning from the first two examples in a real-life scenario. We'll use [CSS Transitions](https://docs.swmansion.com/react-native-reanimated/docs/next/category/css-transitions) to create the header animation and [CSS Animations](https://docs.swmansion.com/react-native-reanimated/docs/next/category/css-animations) for an animation that draws user attention.

## Step 1 – Animate the header on search bar focus


https://github.com/user-attachments/assets/551b39c8-ee74-4164-a0a2-0a4192fe77d4



<details>
<summary>
  <b>[1]</b> Change the header <code>View</code> to an <code>Animated.View</code>
</summary>

<br/>

```jsx
import Animated from 'react-native-reanimated';

<Animated.View
  style={styles.header}
  {/* ... */}
>
```

</details>

<br/>

<details>
<summary>
  <b>[2]</b> When the search bar is focused, the header should fade out and slide up by the height of the header. Use <code>transitionProperty</code> to animate <code>opacity</code> and <code>marginTop</code> properties. Don't forget to set <code>transitionDuration</code>.
</summary>

<br/>

```jsx
<Animated.View
  style={[
    styles.header,
    {
      transitionProperty: ["opacity", "marginTop"],
      transitionDuration: 200,
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
  <b>[3]</b> Use <code>transitionTimingFunction</code> to control the animation timing.
</summary>

<br/>

```jsx
<Animated.View
  style={[
    styles.header,
    {
      {/* ... */}
      transitionTimingFunction: "ease-in-out",
    },
  ]}
  {/* ... */}
>
```

</details>

<br/>

<details>
<summary>
  <b>[4]</b> Use <code>createAnimatedComponent</code> to define an animatable Pressable.
</summary>

<br/>

```jsx
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
  <b>[5]</b> Animate the <code>width</code> of the Cancel button from <code>0</code> to <code>50</code> when search bar is focused. Also, animate <code>marginLeft</code> from <code>0</code> to <code>8</code> to adjust the position of the button. Use <code>transitionProperty</code> and <code>transitionDuration</code>.
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

<details>
<summary>
  <b>[6]</b> Adjust the <code>transitionTimingFunction</code>.
</summary>

<br/>

```jsx
<AnimatedPressable
  {/* ... */}
  style={[
    styles.button,
    {
      {/*...*/}
      transitionTimingFunction: "ease-in-out",
    },
  ]}
>
```

</details>

<br/>

## Step 2 – Animate a fake border around a view 


https://github.com/user-attachments/assets/7bb86557-053f-4ba0-9eb7-792de1be748d


<details>
<summary>
  <b>[1]</b> Measure the dimenstions of the popular container. Save the dimensions to a state. You can use the built-in <code>onLayout</code> property. 
</summary>

<br/>

```jsx
function Details() {
  const [dimenstions, setDimensions] = useState({ width: 0, height: 0 });
  return (
    <View style={styles.content}>
      <View
        style={styles.popularContainer}
        onLayout={(event) => setDimensions(event.nativeEvent.layout)}
      >
      {/* ... */}
  )
}
```

</details>

<br/>

<details>
<summary>
  <b>[2]</b> Define a new absolutely positioned <code>View</code> that's 2 pixels wider and higher than the popular container. Offset it by 1 pixel to the left and up. This View <b>must appear below</b> the popular container.
</summary>

<br/>

```jsx

```

</details>

<br/>


## Next step

**Go to: [Circle Gestures](../4_CircleGestures/)**
