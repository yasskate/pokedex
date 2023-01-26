import { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, Text, View } from 'react-native'
import { PokedexContext } from '../store/contexts/pokedexContext'

const PokemonDetail = ({ route }) => {
  const [state, dispatch] = useContext(PokedexContext)
  const { pokemonId } = route.params

  useEffect(() => {
    fillPokemonDetail()

    return () => {
      dispatch({ type: 'CLEAR_POKEMON_DETAIL' })
    }
  }, [])
  
  const fillPokemonDetail = () => {
    const [selectedPokemon] = state.pokedex.filter(pokemon => pokemon.id === pokemonId)
    dispatch({ type: 'SET_POKEMON_DETAIL', payload: selectedPokemon })
  }

  return (
    <View>
      <StatusBar style="auto" />
      <Text>POKEMON DETAIL!</Text>
      <Text>{state?.pokemon?.name}</Text>
      <Image
        style={{width: 300, height: 200}}
        source={{ uri: state.pokemon?.sprites?.front_default }}
      />
    </View>
  )
}

export default PokemonDetail
