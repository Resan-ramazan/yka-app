import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import { images } from "../constants/Images";

export default function Slider() {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.image}
              style={{
                width: Dimensions.get("screen").width * 0.85,
                height: 150,
                borderRadius: 10,
                marginRight: 15,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
