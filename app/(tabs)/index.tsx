import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import { BorderlessButton } from 'react-native-gesture-handler'
import Card from '@/components/Card'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>

        <View style={styles.info}>

          <View style={styles.box}>
             <View style={{width:60, height:60, backgroundColor: 'blue',}}></View>
          </View>
          <View style={styles.MyName}>
            <Text style={styles.txt}>Name:Mohammad</Text>
            <Text style={styles.txt}>B.D:10/11/98</Text>
          </View>

        </View>

        <View style={styles.logo}>
          <Text style={styles.UI}>My First UI</Text>
        </View>

      </View>
      <Card name="Mohammad" year="1998" points='100'/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    alignItems: 'center',
    // justifyContent: 'center'
    // paddingTop: 100,
  },
  box: {
    width: "20%",
    height: "100%",
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    // backgroundColor:'blue',
  },
  MyName:{
    //borderWidth:1,
    width: "80%",
    height: "100%",
    alignContent:'center',
    justifyContent:'center',
    padding:20,
    marginTop:30,
  },
  info: {
    //borderWidth:1,
    width: "100%",
    height: "50%",
    flexDirection:'row'
  },
  logo: {
   // borderWidth: 1,
    width: "100%",
    height: "50%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt: {
    fontSize: 25,
    // marginLeft: 120,
    // marginTop: 30,
  },
  border: {
    width: "90%",
    height: 400,
    borderWidth:1,
    marginTop:50,
  },
  UI: {
    color: "black",
    fontSize: 60,
    // marginLeft:15,
    // marginTop: 100,
  }
})
