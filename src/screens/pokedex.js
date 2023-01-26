import { StatusBar } from 'expo-status-bar'
import { Button, View, StyleSheet, FlatList } from 'react-native'
import PokemonCard from '../components/pokemonCard'
import Loading from '../components/loading'
import useApi from '../hooks/useApi'
import { colors } from '../utils/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

const Pokedex = ({ navigation }) => {
  const { loading, data } = useApi({ url: POKE_API })

  const gotoPokemonDetailScreen = () =>
    navigation.navigate('PokemonDetail')

  if (loading && data === null) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <FlatList
          style={styles.pokemonList}
          data={data.results}
          numColumns={2}
          renderItem={(item, index) => <PokemonCard {...item} />}
          keyExtractor={(item, index) => index}
        />

        <Button
          title="Go to Pokemon Detail Screen"
          onPress={gotoPokemonDetailScreen}
          />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: '100%',
    flexGrow: 1,
    backgroundColor: colors.hardYellow,
  },
  pokemonList: {
    backgroundColor: colors.blue 
  }
});

export default Pokedex
