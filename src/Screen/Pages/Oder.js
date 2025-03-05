import React from 'react'
import { StyleSheet, View } from 'react-native'
import CommonHeader from '../../componets/CommonHeader'

export default function Oder({navigation}) {
  return (
    <View style={styles.container}>
      <CommonHeader heading={'Oder'}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
