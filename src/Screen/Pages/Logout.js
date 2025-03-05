import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

export default function Logout({ navigation }) {
    useEffect(() => {
        navigation.replace('Login'); 
    }, [navigation]);

    return (
        <View >
        </View>
    );
}