import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const courses = [
  {
    id: "1",
    title: "MOBILE APPLICATIONS DEVELOPMENT",
    description: "Learn to build mobile apps using Java and React Native.",
  },
  {
    id: "2",
    title: "IS PROJECT MANAGEMENT 1",
    description:
      "Covers planning, organizing, and executing IT projects efficiently.",
  },
  {
    id: "3",
    title: "DATABASE MANAGEMENT SYSTEM",
    description:
      "Learn to design, implement, and manage databases effectively.",
  },
  {
    id: "4",
    title: "APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES",
    description:
      "Focuses on designing, coding, testing, and deploying software using emerging technologies.",
  },
  {
    id: "5",
    title: "ENTERPRISE ARCHITECTURE",
    description:
      "Covers the design and implementation of IT systems to align with business goals.",
  },
];

const interests = [
  "Playing Call of Duty Mobile",
  "Editing videos and graphics",
  "Photography",
  "Dancing",
  "Game development ideas",
  "Mobile app experimentation",
];

export default function ProfilePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../assets/robhie.jpg")}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.name}>Robhie Angel D. Sevilleno</Text>
          <Text style={styles.tagline}>
            Aspiring Game Developer | Loves CODM, editing, photography, dancing
          </Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.bodyText}>
              I love exploring technology and creativity. My focus is on developing games and mobile applications, improving my coding skills, and learning new tools to bring ideas to life.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Interests</Text>
            {interests.map((item) => (
              <Text key={item} style={styles.bulletItem}>
                • {item}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Courses</Text>
            {courses.map((course) => (
              <View key={course.id} style={styles.courseCard}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>
                  {course.description}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },

  avatarWrapper: {
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 60,
    overflow: "hidden",
    width: 120,
    height: 120,
    backgroundColor: "#d0c8e8",
  },
  avatar: {
    width: 120,
    height: 120,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    textAlign: "center",
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginBottom: 24,
  },

  section: {
    width: "100%",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 14,
    color: "black",
    lineHeight: 22,
    textAlign: "justify",
  },

  bulletItem: {
    fontSize: 14,
    color: "black",
    marginBottom: 4,
    lineHeight: 22,
  },

  courseCard: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  courseTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "black",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  courseDescription: {
    fontSize: 13,
    color: "black",
    lineHeight: 20,
  },
});