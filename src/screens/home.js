import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
    
const INSTRUCTIONS = [
  '1. You\'ll find a list with the first 150 pokemons',
  '2. You\'ll have access to important information from each pokemon ',
  '3. You could search pokemons by name'
]

const Home = ({ navigation }) => {
  const gotoInformationScreen = () =>
    navigation.navigate('Information')

  const GuideInstructions = () => (INSTRUCTIONS.map((instruction, index) => (
    <View key={index} style={styles.instructionWrapper}>
      <Text style={styles.instructions}>{instruction}</Text>
    </View>
    ))
  )

  const TouchableProjectInformation = () => (
    <TouchableOpacity
      style={styles.touchableProjectInformation}
      onPress={gotoInformationScreen}
    >
        <Image
          source={{ uri: 'https://img.freepik.com/free-icon/valor_318-196559.jpg?w=2000' }}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.touchableText}>Project information</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles. container}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.title}>Welcome to the Pokedex!</Text>
        <Text style={styles.description}>In this pokedex you'll find relevant information about the pokemons from kanto's region</Text>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Pokedex guide:</Text>
          <GuideInstructions />
        </View>

        <TouchableProjectInformation />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.hardBlue,
    flex: 1,
    flexGrow: 1,
    width: '100%'
  },
  scrollContainer: {
    backgroundColor: colors.hardBlue,
    height: '100%',
    flex: 1
  },
  contentContainerStyle: {
    justifyContent: 'space-around',
    backgroundColor: colors.hardBlue,
    alignItems: 'center',
    marginTop: 20,
    flexGrow: 1
  },
  title: {
    color: colors.yellow,
    fontSize: 48,
    fontWeight: 'bold',
    paddingRight: 10,
    textAlign: 'right'
  },
  description: {
    color: colors.white,
    fontSize: 24,
    width: '90%',
    alignSelf: 'center'
  },
  instructionsContainer: {
    alignSelf: 'center',
    backgroundColor: colors.blue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '50%',
    width: '90%'
  },
  instructionsTitle: {
    width: '90%',
    color: colors.yellow,
    fontSize: 32,
    fontWeight: 'bold'
  },
  instructionWrapper: {
    backgroundColor: colors.hardBlue,
    width: '90%',
    borderRadius: 12,
    borderColor: colors.hardYellow,
    borderWidth: 1,
    justifyContent: 'center'
  },
  instructions: {
    fontSize: 16,
    color: colors.white,
    padding: 10,
  },
  touchableProjectInformation: {
    width: '50%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  touchableText: {
    color: colors.yellow,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Home


