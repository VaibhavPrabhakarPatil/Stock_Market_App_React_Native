import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import CommonHeader from '../../componets/CommonHeader'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <CommonHeader heading={'Home'}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})

