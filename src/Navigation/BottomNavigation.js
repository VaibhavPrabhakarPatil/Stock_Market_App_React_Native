import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Analytics from '../Screen/Pages/Analytics';
import Screener from '../Screen/Pages/Screener';
import Home from '../Screen/Pages/Home';
import Possition from '../Screen/Pages/Possition';
import Oder from '../Screen/Pages/Oder';

export default function BottomNavigation({navigation}) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
       {selectedTab === 0 ? <Screener navigation={navigation}/> :
       selectedTab === 1 ? <Analytics navigation={navigation}/> :
       selectedTab === 2 ? <Home navigation={navigation}/> : 
       selectedTab === 3 ? <Possition navigation={navigation}/> :<Oder navigation={navigation}/>}
      <View style={styles.bottomNav}>
        <View style={styles.bottomNav2}>
          <Pressable style={styles.bottomTab} onPress={() => setSelectedTab(0)}>
          <Image style={[styles.BottomIcon,{ tintColor: selectedTab === 0 ? '#4b2d6e' : '#000' }]} source={require('../../assets/home.png')}></Image>
          <Text style={{ color: selectedTab === 0 ? '#4b2d6e' : '#000' }}>Screener</Text>
          </Pressable>

          <Pressable style={styles.bottomTab} onPress={() => setSelectedTab(1)}>
              <Image style={[styles.BottomIcon,{ tintColor: selectedTab === 1 ? '#4b2d6e' : '#000' }]} source={require('../../assets/charts.png')}></Image>
            <Text style={{ color: selectedTab === 1 ? '#4b2d6e' : '#000', fontSize: 14 }}>Analytics</Text>
          </Pressable>

          <Pressable style={styles.bottomTab} onPress={() => setSelectedTab(2)}>
            <Image style={[styles.BottomIcon,{ tintColor: selectedTab === 2 ? '#4b2d6e' : '#000' }]} source={require('../../assets/home.png')}></Image>
            <Text style={{ color: selectedTab === 2 ? '#4b2d6e' : '#000', fontSize: 14 }}>Home</Text>
          </Pressable>

          <Pressable style={styles.bottomTab} onPress={() => setSelectedTab(3)}>
            <Image style={[styles.BottomIcon,{ tintColor: selectedTab === 3 ? '#4b2d6e' : '#000' }]} source={require('../../assets/bag.png')}></Image>
            <Text style={{ color: selectedTab === 3 ? '#4b2d6e' : '#000', fontSize: 14 }}>Possition</Text>
          </Pressable>

          <Pressable style={styles.bottomTab} onPress={() => setSelectedTab(4)}>
            <Image style={[styles.BottomIcon,{ tintColor: selectedTab === 4 ? '#4b2d6e' : '#000' }]} source={require('../../assets/bookmark.png')}></Image>
            <Text style={{ color: selectedTab === 4 ? '#4b2d6e' : '#000', fontSize: 14 }}>Oder</Text>
          </Pressable>


        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    position: 'fixed',
    bottom: 0,
  },
  bottomNav2: {
    width: '100%',
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomIcon:{
    width:25,
    height:25,
    tintColor:'#000'
  }
});
