import React from 'react';
import { View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles2 from '../css/Styles';

export const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles2.container}>
            <ScrollView>
                <Image source={require('../../../../assets/webdekho.png')} style={styles2.logo} />
                <Text style={styles.title}>Login</Text>
                <TextInput label="Username" mode="outlined" style={styles2.input} />
                <TextInput label="Password" mode="outlined" secureTextEntry style={styles2.input} />
                <Button mode="contained" style={styles2.enhancedButton} labelStyle={styles2.buttonLabel} onPress={() => navigation.navigate('DrawerNavigation')}> SIGN IN </Button>
                <Pressable>
                    <Text style={styles.resetText}>Tap here for reset</Text>
                </Pressable>
                <View style={styles2.orContainer}>
                    <View style={styles2.line} />
                    <Text style={styles2.orText}>or sign in with</Text>
                    <View style={styles2.line} />
                </View>
                <View style={styles2.socialButtonsContainer}>
                    <Pressable>
                        <View style={styles2.logoBox}>
                            <Image source={require('../../../../assets/google.png')} style={styles2.socialButton} />
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles2.logoBox}>
                            <Image source={require('../../../../assets/facebook.png')} style={styles2.socialButton} />
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    resetText: {
        textAlign: 'right',
        color: '#4b2d6e',
        marginBottom: 30,
        marginTop: 10,
    },
    enhancedButton: {
        backgroundColor: '#4b2d6e',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 5,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

});
