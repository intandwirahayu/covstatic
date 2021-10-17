import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { cblack, cgray, nbold } from '../utils';

const ItemDataGlobal = (props) => {
    return(
        <View style={styles.containerItem}>
            <View style={styles.containerTitle}>
                {props.iconData}
                <Text style={styles.dataTitle}>{props.titleData}</Text>
            </View>
            
            <Text style={styles.dataCount}>{props.countData}</Text>

        </View>
    )
}

export default ItemDataGlobal;

const styles = StyleSheet.create({
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: cgray,
        borderRadius: 10,
        padding: 15,
        marginBottom: 16
    },
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dataTitle: {
        fontFamily: nbold,
        fontSize: 12.5,
        color: cblack,
        marginLeft: 15
    },
    dataCount: {
        fontFamily: nbold,
        fontSize: 11,
        color: cblack,
        marginLeft: 15,
        opacity: 0.8
    }
});