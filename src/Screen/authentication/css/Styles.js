import {StyleSheet } from 'react-native';

const styles2 =StyleSheet .create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 190,
        height: 150,
        alignSelf: 'center',
        marginBottom: 10,
        resizeMode:'contain'
    },
    input: {
        height: 55,
        borderColor: '#4b2d6e',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
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
    orContainer: {
        flexDirection: 'row',  
        alignItems: 'center', 
        marginVertical: 20, 
    },
    orText: {
        textAlign: 'center',
        color: '#6A6A6A',
        fontSize: 16,
    },
    line: {
        flex: 1,                
        height: 1,             
        backgroundColor: '#ccc', 
        marginHorizontal: 10,   
    },
    socialButtonsContainer: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    logoBox: {
        width: 170,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4b2d6e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialButton: {
        width: 30,
        height: 30,
    },
    });

export default styles2;