import React from 'react';
import { View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles2 from '../css/Styles';

export const Mobile = () => {
    return (
        <SafeAreaView style={styles2.container}>
            <ScrollView>
                <Image
                    source={require('../../../../assets/webdekho.png')}
                    style={styles2.logo}
                />
                <Text style={styles.title}>Kripton</Text>
                <Text style={styles.termsText}>{'Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed do eiusmod'}</Text>
                <TextInput style={styles2.input} label="Mobile Number" mode="outlined" keyboardType="phone-pad" />
                <Button mode="contained" style={styles2.enhancedButton} labelStyle={styles2.buttonLabel} > SIGN UP </Button>
                <Pressable>
                    <Text style={styles.termsText}> {'By tapping Sign up you accept all\n'} <Text style={styles.link}>terms</Text> and <Text style={styles.link}>condition</Text></Text>
                </Pressable>
                <View style={styles2.orContainer}>
                    <View style={styles2.line} />
                    <Text style={styles2.orText}>Already have an account?</Text>
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
        textAlign: 'center'
    },
    termsText: {
        textAlign: 'center',
        color: '#6A6A6A',
        marginBottom: 30,
        marginTop: 10
    },
    link: {
        color: '#4b2d6e',
    },
});
