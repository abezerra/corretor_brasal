import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const css = StyleSheet.create({
  bg: {
    flex: 1,
    width: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  loginCotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
// { height: 40, width: '100%', marginTop: 30, marginHorizontal: 15 }
    color: 'white',
    padding: 10,
    height: 50,
    borderColor: '#477E65',
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 8,
    width: ( width - 45 ),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#8ad57b',
    width: ( width - 45 ),
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },

  signup: {
    fontSize: 14,
    color: '#fff',
    margin: 30,
  },

  logo: {
    marginTop: 20,
    marginBottom: 40,
  },
  logoImage: {
    width: 195,
    height: 41,
  },
  
  toasterContainer: {
    backgroundColor: 'red',
  },
  
  toasterText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default css;
