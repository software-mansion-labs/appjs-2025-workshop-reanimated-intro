import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

const gallery = [
  "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export function ShoeGallery() {
  return (
    <View style={styles.gallery}>
      <FlatList
        data={gallery}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
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
