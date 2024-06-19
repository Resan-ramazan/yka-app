import { View, Text, FlatList } from "react-native";
import React from "react";

export default function CourseContent({course}) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Course Content</Text>

      <FlatList
        data={course?.topic}
        renderItem={({item}) =>(
            <View>
                <Text>{item.topic}</Text>
            </View>
        )}
      />
    </View>
  );
}
