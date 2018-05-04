import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window');
const css = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    marginBottom: 55,
  },
  headerTitle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  generatedImage: {
    width: 250,
    height: 250,
  },
  containerOfTwoImages: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 30,
    height: 150,
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default css
