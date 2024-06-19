import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { advance } from "../constants/AdvanceCourse";
import { useNavigation } from "expo-router";

export default function AdvanceCourse({ type }) {
  const navigation = useNavigation();
  const onPressCourse = (course) => {
    navigation.navigate("CourseDetails", { courseData: course });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 3 }}>
        {type} Coursse
      </Text>
      <FlatList
        data={advance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressCourse(item)}
            style={{
              backgroundColor: "#fff",
              marginRight: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 250,
                height: 120,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ color: "gray" }}>{item.topic.length} Lessons</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
