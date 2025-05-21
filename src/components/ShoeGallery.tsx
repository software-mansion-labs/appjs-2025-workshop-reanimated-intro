import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

const gallery = [
  require("../../assets/shoe-1.jpg"),
  require("../../assets/shoe-2.jpg"),
  require("../../assets/shoe-3.jpg"),
];

export function ShoeGallery() {
  return (
    <View style={styles.gallery}>
      <FlatList
        data={gallery}
        renderItem={({ item }) => <Image source={item} style={styles.image} />}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
    flex: 0.75,
    marginBottom: 8,
  },
  image: {
    margin: 8,
    width: Dimensions.get("window").width - 16,
    aspectRatio: 0.8,
  },
});
