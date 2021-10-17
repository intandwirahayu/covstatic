import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDead } from '../assets';
import { cpurple, nbold, nregular } from '../utils';

const ItemDataDead = (props) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.content}>
                <IconDead/>

                <Text style={styles.countData}>{props.countDead}</Text>
                <Text style={styles.nameData}>kematian</Text>
            </View>

            <Text style={styles.dateData}>{props.dateDead}</Text>
        </View>
    )
}

export default ItemDataDead;

const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
        marginBottom: 16,
        backgroundColor: cpurple,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countData: {
        fontFamily: nbold,
        fontSize: 18,
        color: 'white',
        marginLeft: 15
    },
    nameData: {
        fontFamily: nregular,
        fontSize: 12,
        color: 'white',
        opacity: 0.8,
        marginLeft: 5,
        marginBottom: -5
    },
    dateData: {
        fontFamily: nregular,
        fontSize: 11,
        color: 'white',
        opacity: 0.8,
        marginTop: -8,
        marginRight: -5
    }
})
