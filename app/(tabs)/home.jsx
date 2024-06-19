import { View, Text, ScrollView } from "react-native";
import React from "react";
import WelcomeHeader from "../../components/WelcomeHeader";
import SearchBar from "../../components/SearchBar";
import Slider from "../../components/Slider";
import VideoCourseList from "../../components/VideoCourseList";
import CourseList from "../../components/CourseList";
import AdvanceCourse from "../../components/AdvanceCourse";

export default function Home() {
  return (
    <ScrollView style={{ padding: 40 }}>
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <VideoCourseList />
      <CourseList type={"Basic"}/>
      <AdvanceCourse type={"Advance"}/>
    </ScrollView>
  );
}
