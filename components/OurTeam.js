import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default function OurTeamPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Our team</Text>

        <View style={styles.memberContainer}>
          <Image source={require('../assets/Amar.jpg')} style={styles.image} />
          <Text style={styles.description}>Amar is a skilled software engineer with a passion for front-end development. He brings creativity and attention to detail to every project he works on, ensuring exceptional user experiences.</Text>
        </View>

        <View style={styles.memberContainer}>
          <Image source={require('../assets/Lejla.jpg')} style={styles.image} />
          <Text style={styles.description}>Lejla is a talented UI/UX designer with a keen eye for aesthetics. Her ability to blend colors, typography, and imagery creates visually stunning designs that captivate audiences.</Text>
        </View>

        <View style={styles.memberContainer}>
          <Image source={require('../assets/Ismar.jpg')} style={styles.image} />
          <Text style={styles.description}>Ismar is a dedicated project manager known for his strong leadership skills. With a knack for organization and effective communication, he ensures that projects are delivered on time and within budget.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
  memberContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    textAlign: 'center',
  },
});
