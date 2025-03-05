import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommonHeader from '../../componets/CommonHeader';

export default function Analytics({ navigation }) {
    return (
        <View style={styles.container}>
          <CommonHeader heading={'Analytics'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
