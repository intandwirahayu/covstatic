import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { cblack, cgray, nbold } from '../utils';

const ItemStatistic = (props) => {
    return (
        <View>
            <View style={styles.containerItem}>
                {props.iconData}

                <Text style={styles.dataName}>{props.nameData}</Text>
                <Text style={styles.dataCount}>{props.countData}</Text>
            </View>
        </View>
    )
}

export default ItemStatistic;

const styles = StyleSheet.create({
    containerItem: {
        width: 130,
        padding: 15,
        borderRadius: 10,
        backgroundColor: cgray,
        marginRight: 20
    },
    dataName: {
        fontFamily: nbold,
        fontSize: 13,
        color: cblack,
        marginTop: 10
    },
    dataCount: {
        fontFamily: nbold,
        fontSize: 12,
        color: cblack,
        opacity: 0.8
    }
})
