import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconRangePeople } from '../assets'
import { cblack, cgray, cpurple, cyellow, nbold, nregular } from '../utils'

const ItemDataAge = (props) => {
    return (
        <View style={styles.containerItem}>
            <Text style={styles.titlePage}>Rentang Umur</Text>

            <View style={styles.containerRangeAge}>
                <View style={styles.itemRange}>
                    <Text style={styles.countRange}>{props.rangeAge}</Text>
                    <IconRangePeople style={styles.iconRange}/>
                </View>
            </View>

            <View style={styles.containerLine}>
                <View style={styles.valueLine}/>
            </View>

            <View style={styles.containerContent}>
                <View>
                    <Text style={styles.titleContent}>Total Orang</Text>
                    <Text style={styles.titleContent}>Umur</Text>
                </View>

                <View>
                    <Text style={styles.countContent}>{props.countPeople}</Text>
                    <Text style={styles.countContent}>{props.age}</Text>
                </View>
            </View>
        </View>
    )
}

export default ItemDataAge

const styles = StyleSheet.create({
    containerItem: {
        width: '47.4%',
        backgroundColor: cgray,
        borderRadius: 10,
        padding: 15,
        paddingBottom: 13,
        marginBottom: 16
    },
    titlePage: {
        fontFamily: nbold,
        fontSize: 12,
        color: cblack,
    },
    containerRangeAge: {
        alignItems: 'center',
        marginTop: 13,
        marginBottom: 18,

    },
    itemRange: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        position: 'relative',
        backgroundColor: cyellow,
    },
    iconRange: {
        position: 'absolute',
        bottom: 5,
        left: 10
    },
    countRange: {
        fontFamily: nbold,
        fontSize: 20,
        color: cblack,
    },
    containerLine: {
        width: '100%',
        height: 3,
        borderRadius: 50,
        backgroundColor: '#C4C4C4',
    },
    valueLine: {
        width: '80%',
        height: 3,
        borderRadius: 50,
        backgroundColor: cpurple,
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    titleContent: {
        fontFamily: nbold,
        fontSize: 11,
        color: cblack,
        marginBottom: 6
    },
    countContent: {
        fontFamily: nregular,
        fontSize: 11,
        color: cblack,
        opacity: 0.8,
        textAlign: 'right',
        marginBottom: 6
    }
})
