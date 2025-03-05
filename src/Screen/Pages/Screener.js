import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import CommonHeader from '../../componets/CommonHeader'
import rightImage from '../../../assets/bell.png'; 

export default function Screener({navigation}) {
  return (
    <View style={styles.container}>
      <CommonHeader heading={'Screener'} rightImage={rightImage}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})

