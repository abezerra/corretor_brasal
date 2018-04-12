import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
  bg: {
    flex: 1,
    width: null,
  },
  cotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    marginTop: 20,
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    marginBottom: 20
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
  sellerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#8a0fe7',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#8a0fe7',
    width: 320
  },
  scheduleCallButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#96BDAD',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#96BDAD',
    width: 320
  },
  mediaGeneratorButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#A4DAAA',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#A4DAAA',
    width: 320
  },
  ascomButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#666666',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#666666',
    width: 320
  },
  historyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#400ae8',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#400ae8',
    width: 320
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#022714',
  },
  logo: {
    marginTop: -60,
    marginBottom: 10,
  },
  logoImage: {
    width: 195,
    height: 41,
  },
});

export default css
