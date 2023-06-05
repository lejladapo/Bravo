import { StyleSheet } from "react-native";


const table = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#c1bd9f',
    margin: 6,
    padding: 6
  },
  left: {
    flex: 1,
    alignItems: 'flex-start'
  },
  right: {
    flex: 1,
    alignItems: 'flex-end'
  },
  center: {
    flex: 4,
    alignItems: 'center'
  },
  cell: {
    color: 'black',
    fontSize: 16
  },
  pressed: {
    backgroundColor: 'red',
    opacity: 0.5
  },
  image: {
    width: 32,
    height: 32
  }
})

export default table;