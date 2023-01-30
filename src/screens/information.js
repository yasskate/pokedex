import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { colors } from '../utils/colors'

const ABOUT_AUTHOR_PARAGRAPHS = [
  "Hi, My name is Yasser Batas. \nI'm behind this project",
  "I'm a technology enthusiast since I was 14 years old and software developer since 5 years",
  "Throughout my career I've had the opportunity to collaborate in different work teams participating in decision-making, implementating web and mobile technologies for the creation of new projects, learning good practices and sometimes getting production environment up. Yes, the problems never stop tho, jk.",
  "I've had to solve problems using different programming languages, among which mainly have been with javascript and less with elixir and python. \n\nUsing different tools, libraries and frameworks like React, React Native, Expo, Next, Phoenix, Flask to mention a few.",
  "Also, I've had the experience of leading projects and mentoring two Jr. developers who were just joining the team.",
  "I enjoy developing for web and mobile platforms although I also like to explore other environments."
]

const ABOUT_PROJECT_PARAGRAPHS = [
  "This app was developed with much effort implementing the main concepts of Javascript and React Native powered by Expo",
  "Context and reducers were implemented as global state management in order to avoid installing third party dependencies",
  "The api implemented in this project. \nhttps://pokeapi.co/",
  "The images and icons in this app were taken from internet",
  "If you want to know more about this project or contribute to it. \nhttps://github.com/yasskate/pokedex"
]
const AboutAuthorParagraphs = () => ABOUT_AUTHOR_PARAGRAPHS.map((paragraph, index)=> (
  <View key={index} style={styles.paragraphWrapper}>
    <Text style={styles.paragraph}>{paragraph}</Text>
  </View>
))

const AboutProjectParagraphs = () => ABOUT_PROJECT_PARAGRAPHS.map((paragraph, index) => (
  <View key={index} style={styles.paragraphWrapper}>
    <Text style={styles.paragraph}>{paragraph}</Text>
  </View>
))

const Information = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About the author</Text>
          <AboutAuthorParagraphs />
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About the project</Text>
          <AboutProjectParagraphs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  scrollContainer: {
    backgroundColor: colors.hardBlue
  },
  scrollContentContainer: {
    backgroundColor: colors.hardBlue,
    alignItems: 'center'
  },
  aboutContainer: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-evenly',
    marginTop: 15,
    width: '90%'
  },
  aboutTitle: {
    color: colors.hardYellow,
    fontSize: 48,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  paragraphWrapper: {
    backgroundColor: colors.hardBlue,
    borderRadius: 12,
    borderColor: colors.hardYellow,
    borderWidth: 1,
    padding: 15,
    marginVertical: 4,
},
  paragraph: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 22
  },
})

export default Information
