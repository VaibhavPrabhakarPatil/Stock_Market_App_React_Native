import React from 'react';
import { View, StyleSheet, Text, Pressable,Image } from 'react-native';
import CommonHeader from '../../componets/CommonHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import rightImage from '../../../assets/refresh.png'; 

export default function Possition({ navigation }) {
    return (
        <View style={styles.container}>
            <CommonHeader heading={'Possition'} rightImage={rightImage} />
            <View style={styles.summaryContainer}>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryLabel}>Invested  </Text>
                    <Text style={styles.summaryValue}>₹ 2,770.00</Text>
                    <Text style={styles.TextPL}>P&L</Text>
                </View>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryLabel}>   Current Value</Text>
                    <Text style={styles.summaryValue}>  ₹ 2,710.00</Text>
                    <Text style={styles.loss}>- ₹ 60.00 (-2.17%)</Text>
                </View>
            </View>
            <Text style={styles.holdingsTitle}>1 Holdings</Text>
            <Text style={styles.textqty}>     Qty. 10. Avg. 277.0 . Days. 0</Text>
            <Text style={[styles.holdingName,{color:'red' ,textAlign:'right',marginRight:20}]}>-2.17%</Text>
            <View style={styles.holdingItem}>
                <Image source={require('../../../assets/true.png')} style={styles.icon}/>
                <Text style={[styles.holdingName,{marginLeft:-230} ]}>BEL</Text>
                <Text style={[styles.holdingName,{color:'red'}]}>₹ -60.0</Text>
            </View>
            <View style={styles.holdingItem}>
                <Text>Invested ₹ 2,770.00</Text>
                <Text>  LTP ₹ 271.0 (+2.35%)</Text>
            </View>
            <View style={styles.holdingActions}>
                <Pressable style={styles.actionButton}>
                    <Icon name="edit" size={20} color="gray" />
                    <Text style={styles.actionText}>Edit</Text>
                </Pressable>
                <Pressable style={styles.actionButton}>
                    <Icon name="delete" size={20} color="gray" />
                    <Text style={styles.actionText}>Delete</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
        margin:10,
        borderColor:'#ccc',
        borderWidth:1
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryLabel: {
        fontSize: 14,
        color: 'gray',
    },
    summaryValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight:-15
    },
    TextPL:{
     fontSize:16,
     fontWeight:'500',
     color:'#ccc',
     marginLeft:-34,
     marginTop:5
      },
    loss: {
        color: 'red',
        fontSize: 14,
    },
    holdingsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
        padding: 16,
        color:'#4b2d6e'
    },
    holdingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    holdingName: {
        fontWeight: 'bold',
        marginLeft: 20,
    },
    holdingActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end', 
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20, 
    },
    actionText: {
        marginLeft: 5,
        fontSize: 16,
        color: 'gray',
    },
    textqty:{
        color:'#ccc',
        marginBottom:10
    },
    icon:{
      width:24,
      height:24,
      tintColor:"#49e683"
    }
});

