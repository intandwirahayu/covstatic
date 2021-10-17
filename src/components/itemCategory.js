import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { cblack, cpurple, nbold, nregular } from '../utils';

const ItemCategory = () => {
    return(
        <View style={styles.containerCategory}>
            <TouchableOpacity style={styles.touchCategory}>
                <Text style={styles.titleCategory}>semua</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchCategoryRegular}>
                <Text style={styles.titleCategoryRegular}>Positif tertinggi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchCategoryRegular}>
                <Text style={styles.titleCategoryRegular}>Sembuh tertinggi</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemCategory;

const styles = StyleSheet.create({
    containerCategory: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    touchCategory: {
        backgroundColor: cpurple,
        paddingVertical: 5,
        paddingBottom: 7,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginRight: 14
    },
    titleCategory: {
        fontFamily: nbold,
        fontSize: 14,
        color: 'white'
    },
    touchCategoryRegular: {
        paddingVertical: 5,
        // paddingBottom: 7,
        borderRadius: 6,
        marginRight: 14
    },
    titleCategoryRegular: {
        fontFamily: nregular,
        fontSize: 14,
        color: cblack
    }
});