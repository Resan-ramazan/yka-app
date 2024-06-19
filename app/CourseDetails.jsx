import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CourseContent from "../components/CourseContent";

export default function CourseDetails() {
  const param = useRoute().params;
  const [course, setCourse] = useState([]);
  useEffect(() => {
    console.log(param);
    setCourse(param.courseData);
  }, []);
  
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{course.name}</Text>
        <Text style={{ color: "gray" }}>By Ramazan Reşan</Text>

        <Image
          source={course.image}
          style={{ height: 180, width: 400, marginTop: 10, borderRadius: 10 }}
        />
        <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 16 }}>
          About Course
        </Text>
        <Text style={{ color: "gray", marginTop: 10 }} numberOfLines={3}>
          {course.description}
        </Text>
      </View>
      <CourseContent course={course} />
    </View>
  );
}
