# CSS Transitions

[CSS Transitions](https://docs.swmansion.com/react-native-reanimated/docs/next/category/css-transitions) instead of keyframes animate properties based on the state change.

In this lesson we're going to use CSS Transitions to to make a simple button animation on press.

## Step 1 - Move the arrow to the right on press

https://github.com/user-attachments/assets/c3221460-8789-4e64-ad59-255291a08fe4


<details>
<summary>
  <b>[1]</b> Change the <code>View</code> wrapping the Icon to <code>Animated.View</code>
</summary>

```jsx
import Animated from "react-native-reanimated";

<Animated.View>
  <Octicons name="arrow-right" size={24} color="white" />
</Animated.View>
```

</details>
<br />

<details>
<summary>
  <b>[2]</b> On button press, move the arrow icon 5 px to the right. Use the <code>transform</code> property. Set the duration of the transition to 150 ms. Adjust the timing function of the transition to your liking.
</summary>
  <br/>

```jsx
<Animated.View
  style={{
    transitionProperty: "transform",
    transitionDuration: 150,
    transform: [{ translateX: pressed ? 5 : 0 }],
    transitionTimingFunction: "ease-in",
  }}
>
  <Octicons name="arrow-right" size={24} color="white" />
</Animated.View>
```

</details>
<br/>

## Step 2 - Animate the button background on press

https://github.com/user-attachments/assets/c7b5ff97-54d0-4b49-a8e0-d03be69e7bf9

<details>
<summary>
  <b>[1]</b> Change the <code>View</code> wrapping the select size button to an <code>Animated.View</code>
</summary>

```jsx
<Animated.View
  style={[
    styles.selectSizeButtonBackground,
    { width: layout.width, height: layout.height },
  ]}
/>
```

</details>
<br />

<details>
<summary>
  <b>[2]</b> Move the button 5 px to the left and up on press. Set the duration of the transition to 150 ms.
</summary>

```jsx
<Animated.View
  style={[
    styles.selectSizeButtonBackground,
    { width: layout.width, height: layout.height },
    {
      transitionProperty: "transform",
      transitionDuration: 150,
      transform: [
        { translateX: pressed ? -5 : 0 },
        { translateY: pressed ? -5 : 0 },
      ],
      transitionTimingFunction: "ease-in",
    },
  ]}
/>
```

</details>
<br />


## Next step

**Go to: [Tienda](../3_Tienda/)**
