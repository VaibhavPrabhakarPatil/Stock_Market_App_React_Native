import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CommonHeader({ heading, rightImage }) {
    const navigation = useNavigation(); 

    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="#4b2d6e" barStyle="light-content" translucent={true} />
            <View style={styles.headerContent}>
                <Pressable onPress={() => navigation.openDrawer()}> 
                    <Image style={styles.drawericon} source={require('../../assets/left.png')} />
                </Pressable>
                <Image style={[styles.drawericon, { marginLeft: 20, tintColor: 'white' }]} source={require('../../assets/true.png')} />
                <Text style={styles.Textheadding}>{heading}</Text>
                {rightImage && (
                    <Image style={styles.rightImage} source={rightImage} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 95,
        justifyContent: 'flex-end',
        paddingLeft:5,
        backgroundColor: '#4b2d6e',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
    },
    Textheadding: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 10,
        marginBottom: 10,
        flex: 1, 
    },
    drawericon: {
        width: 30,
        height: 30,
        tintColor: '#fff',
        marginBottom: 10,
    },
    rightImage: {
        width: 30,
        height: 30,
        marginBottom: 10,
        tintColor: '#fff', 
    },
});
