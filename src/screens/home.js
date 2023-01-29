import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
    
const INSTRUCTIONS = [
  '1. Encontraras un listado de los primeros 150 pokemons',
  '2. Tendras acceso a importante de cada pokemon',
  '3. Podras realizar busquedas por nombre'
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
    <SafeAreaView
      style={styles. container}
    >
      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.contentContainerStyle} horizontal={false}>
        <StatusBar style="light" />
        <Text style={styles.title}>Welcome to the Pokedex!</Text>
        <Text style={styles.description}>En este pokedex encontraras informacion importante respecto a los pokemon de la region Kanto</Text>
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
    alignItems: 'center',
    backgroundColor: colors.hardBlue,
    flex: 1,
    flexGrow: 1
  },
  contentContainerStyle: {
    justifyContent: 'space-around',
    backgroundColor: colors.hardBlue,
    flex: 1
  },
  title: {
    color: colors.yellow,
    fontSize: 48,
    fontWeight: 'bold',
    paddingRight: 10,
    textAlign: 'right',
    width: '100%'

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
    borderRadius: 10,
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


