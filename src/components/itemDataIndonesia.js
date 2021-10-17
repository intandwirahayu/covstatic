import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { cblack, cpurple, nbold, nregular } from '../utils';

const ItemDataIndonesia = (props) => {
    return(
        <View style={styles.containerItem}>
            {props.iconData}

            <View style={{height: 10}}/>
            
            <View style={styles.containerData}>
                <Text style={styles.countData}>{props.dataCount}</Text>
                <Text style={styles.nameData}>{props.dataName}</Text>
            </View>
        </View>
    )
}

export default ItemDataIndonesia;

const styles = StyleSheet.create({
    containerItem: {
        alignItems: 'center',
    },
    containerData: {
        alignItems: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: cpurple,
        paddingHorizontal: 17
    },
    countData: {
        fontFamily: nbold,
        fontSize: 13,
        color: cblack,
    },
    nameData: {
        fontFamily: nregular,
        fontSize: 12,
        color: cblack,
        opacity: 0.8,
        marginTop: 1
    }
});