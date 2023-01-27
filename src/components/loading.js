import { Image, StyleSheet, View } from "react-native"
import { colors } from "../utils/colors"

const Loading = () => (
  <View style={styles.container}>
    <Image
      style={{width: 300, height: 200}}
      source={{uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ee4b875-457c-4f95-8dc5-0817243a235a/d8ogz4y-a89404b5-cbfe-43ae-af86-1f46f45687bc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZTRiODc1LTQ1N2MtNGY5NS04ZGM1LTA4MTcyNDNhMjM1YVwvZDhvZ3o0eS1hODk0MDRiNS1jYmZlLTQzYWUtYWY4Ni0xZjQ2ZjQ1Njg3YmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WZnwNsqwI_04nmi8uhfnmmGtsJaFT3KBhiwVI6cx9ZI'}}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    width: '50%'
  }
})

export default Loading