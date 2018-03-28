import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
  main: {
    backgroundColor: '#005c5b',
    flex: 1,
  },
  header: {
    marginBottom: 55,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  generatedImage: {
    width: 150,
    height: 150,
  },
  containerOfTwoImages: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
    height: 150,
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default css
