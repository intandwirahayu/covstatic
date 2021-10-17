import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import {HeaderMain, ItemRegion} from '../components';

const DataDunia = () => {
    const dataBerandaDunia = useSelector(state => state.reduceBeranda.dataDunia);

    return(
        <ScrollView style={styles.containerPage}>
            <HeaderMain namePage="Data Dunia"/>

            <View style={styles.containerItemData}>
                {
                    Object.entries(dataBerandaDunia).map((itemDunia, index) => {
                        if(index < 30){
                            const checkCountry = itemDunia[1].All.hasOwnProperty('country');
                        
                            if(checkCountry == true){
                                return(
                                    <ItemRegion 
                                        key={index} 
                                        region={itemDunia[1].All.country} 
                                        positiv={itemDunia[1].All.confirmed}
                                        healed={itemDunia[1].All.recovered} 
                                        dead={itemDunia[1].All.deaths}
                                        goPage='DetailDataDunia'
                                    />
                                )
                            }
                        }
                    })
                }
                
            </View>
        </ScrollView>
    )
}

export default DataDunia;

const styles = StyleSheet.create({
    containerPage: {
        padding: 20,
        paddingTop: 12,
        backgroundColor: 'white'
    },
    containerItemData: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
        marginBottom: 50
    }
});