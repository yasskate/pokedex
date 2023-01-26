import { StatusBar } from 'expo-status-bar'
import { Text, Button, View } from 'react-native'
import { colors } from '../utils/colors'
    
const Home = ({ navigation }) => {
  const gotoInformationScreen = () =>
    navigation.navigate('Information')

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.hardBlue,
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <StatusBar style="auto" />
      <Text>HOME!</Text>
      <Button
        title="Go to Information stack screen"
        onPress={gotoInformationScreen}
      />
      <Text>HOME! 2</Text>
    </View>
  )
}

export default Home


