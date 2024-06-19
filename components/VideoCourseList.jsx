import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TurboModuleRegistry,
} from "react-native";
import React from "react";
import { courses } from "../constants/VideoCourseApi";

export default function VideoCourseList() {
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 3 }}>
        Video Courses
      </Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.image}
              style={{
                width: 200,
                height: 100,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
