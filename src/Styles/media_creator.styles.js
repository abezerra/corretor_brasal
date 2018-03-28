import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  bg: {
    flex: 1,
    width: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#126f69',
  },
  loginCotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#fff',
    padding: 10,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginBottom: 8,
    width: 320,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#328fe6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#8ad57b',
    width: 320,
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
  signup: {
    fontSize: 14,
    color: '#fff',
    margin: 30,
  },
  logo: {
    marginTop: 70,
    marginBottom: 40,
  },
  logoImage: {
    width: 355,
    height: 75,
  },
});

export default css;
