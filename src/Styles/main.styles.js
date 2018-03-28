import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
  main: {
    backgroundColor: '#005c5b',
    flex: 1,
  },
  featured: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  featuredImage: {
    marginTop: 50,
    width: 330,
    height: 200,
    borderRadius: 20,
  },
  wellcomeClient: {
    fontSize: 20,
    marginTop: 40,
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    marginBottom: 80
  },
  threeBalls: {
    color: '#fff',
    fontSize: 25
  },
  textOfDescription: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 20
  },
  list_food: {
    flex: 10
  },
  list_food_item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  list_food_item_image: {
    width: 80,
    height: 80,
    margin: 10,
    // borderWidth: 1,
    // borderColor: '#fff',
    // borderRadius: 50,
  },
  textOfDescriptionOfImage: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'transparent',
    // marginTop:
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#8ad57b',
    padding: 10,
    marginTop: 60,
    backgroundColor: '#8ad57b',
    width: 320
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  }
});

export default css
