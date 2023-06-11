import { StyleSheet } from "react-native";


const table = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    opacity:0.8,
    borderBottomWidth:2,
    marginBottom: 6,
  },
  left: {
    flex: 1,
    marginLeft:40,
    paddingBottom:10,
    paddingTop:10
  },
  right: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'black',
    paddingTop:32,
    paddingBottom:32
  },
  center: {
    flex: 4,
    alignItems: 'center'
  },
  cellLeft: {
    color: 'black',
    fontSize: 20,
    padding:5,
    borderBottomWidth:2
  },
  cellLeft2: {
    color: 'black',
    fontSize: 20,
    paddingTop:5,
    paddingLeft:5,
  },
  cellRight: {
    color: 'white',
    fontSize: 25,
    fontWeight:'bold'
  },
  pressed: {
    backgroundColor: 'black',
    opacity: 0.5
  },
})

export default table;