import { StyleSheet, Text } from "react-native";

export function ShoeDetails() {
  return (
    <>
      <Text style={styles.name}>Nike Air Max 1/97</Text>
      <Text style={styles.secondLine}>Sean Wotherspoon</Text>
      <Text style={styles.price}>$1955</Text>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Menlo",
    textTransform: "uppercase",
  },
  secondLine: {
    fontSize: 16,
    color: "#64748b",
    marginBottom: 12,
    fontFamily: "Menlo",
  },
  price: {
    fontWeight: "bold",
    color: "#374151",
    fontSize: 22,
  },
});
