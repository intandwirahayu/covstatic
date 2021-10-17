import axios from 'axios';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IconCity, IconContinent, IconMeninggal, IconPositif, IconSembuh } from '../assets';
import { HeaderBack, ItemDataDead, ItemStatistic } from '../components';
import { cblack, cgray, cpurple, nbold, nregular } from '../utils';

const DetailDataDunia = ({route}) => {
    const nameCountry = route.params.nameCountry;

    const stateDetailDunia = useSelector(state => state.reducerDetailDunia);
    const { countPositif, countHealed, countDead, country, city, location, continent, 
        abbreviation, population, life_expectancy, allField} = stateDetailDunia;

    const dispatch = useDispatch();

    useEffect(() => {
        getCasesCountry();
        getDeadCountry();
    }, []);

    const getCasesCountry = async () => {
        try{
            await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${nameCountry}`)
            .then((result) => {
                const fieldData = result.data.All;

                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'countPositif', valueItem: fieldData.confirmed});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'countHealed', valueItem: fieldData.recovered});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'countDead', valueItem: fieldData.deaths});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'country', valueItem: fieldData.country});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'city', valueItem: fieldData.capital_city});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'location', valueItem: fieldData.location});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'continent', valueItem: fieldData.continent});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'abbreviation', valueItem: fieldData.abbreviation});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'population', valueItem: fieldData.population});
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'life_expectancy', valueItem: fieldData.life_expectancy});
            })
            .catch((err) => {
                console.log(err);
            })
        }catch(err){
            console.log(err);
        }
    }

    const getDeadCountry = async () => {
        try{
            await axios.get(`https://covid-api.mmediagroup.fr/v1/history?country=${nameCountry}&status=deaths`)
            .then((result) => {
                const allField = result.data.All.dates;
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'allField', valueItem: allField});
            })
            .catch((err) => {
                console.log(err);
            })
            
        }catch(err){
            console.log(err);
        }
    }

    return (
        <ScrollView style={styles.containerPage}>
            <View style={{paddingLeft: 20, paddingRight: 45}}>
                <HeaderBack namePage="Detail Data Dunia"/>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.containerContent1}>
                <ItemStatistic iconData={<IconPositif/>} nameData="Total Positif" countData={countPositif}/>
                <ItemStatistic iconData={<IconSembuh/>} nameData="Total Sembuh" countData={countHealed}/>
                <ItemStatistic iconData={<IconMeninggal/>} nameData="Total Meninggal" countData={countDead}/>
            </ScrollView>

            <View style={styles.containerContent2}>
                <View>
                    <Text style={styles.labelCountry}>Negara</Text>
                    <Text style={styles.nameCountry}>{country}</Text>
                </View>

                <View style={styles.containerRegion}>
                    <View style={styles.itemRegion}>
                        <IconCity/>
                        <Text style={styles.valueRegion}>{city}</Text>
                    </View>

                    <View style={styles.itemRegion}>
                        <IconContinent/>
                        <Text style={styles.valueRegion}>{location}</Text>
                    </View>
                </View>

                <View style={styles.containerRegion}>
                    <Text style={styles.valueRegion2}>{continent}</Text>
                    <Text style={styles.valueRegion2}>{abbreviation}</Text>
                </View>

                <View style={{marginVertical: 25}}>
                    <Text style={styles.valueCountPeople}>Populasi : {population}</Text>
                    <Text style={styles.valueCountPeople}>Harapan Hidup : {life_expectancy}</Text>
                </View>

                <View style={{paddingBottom: 70}}>
                    <Text style={styles.titleItemContent}>Kasus Kematian</Text>

                    <View style={styles.itemContentDead}>
                        {
                            <View>
                                <ItemDataDead dateDead="2021-10-15" countDead={allField["2021-10-15"]}/>
                                <ItemDataDead dateDead="2021-10-14" countDead={allField["2021-10-14"]}/>
                                <ItemDataDead dateDead="2021-10-13" countDead={allField["2021-10-13"]}/>
                                <ItemDataDead dateDead="2021-10-12" countDead={allField["2021-10-12"]}/>
                                <ItemDataDead dateDead="2021-10-11" countDead={allField["2021-10-11"]}/>
                            </View>
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailDataDunia;

const styles = StyleSheet.create({
    containerPage: {
        paddingTop: 10,
        backgroundColor: 'white'
    },
    containerContent1: {
        width: '100%',
        height: 255,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 58,
        paddingLeft: 20,
        backgroundColor: cpurple,
    },
    containerContent2: {
        width: '100%',
        marginTop: -48,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    labelCountry: {
        fontFamily: nbold,
        fontSize: 12,
        color: cblack,
        opacity: 0.8
    },
    nameCountry: {
        fontFamily: nbold,
        fontSize: 20,
        color: cblack,
    },
    containerRegion: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 11
    },
    itemRegion: {
        flexDirection: 'row',
        marginRight: 20
    },
    valueRegion: {
        fontFamily: nbold,
        fontSize: 12,
        color: cblack,
        opacity: 0.8,
        marginLeft: 8
    },
    valueRegion2: {
        fontFamily: nbold,
        fontSize: 12,
        color: cblack,
        opacity: 0.8,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 7,
        marginRight: 10,
        backgroundColor: cgray
    },
    valueCountPeople: {
        fontFamily: nregular,
        fontSize: 12,
        color: cblack,
        marginBottom: 5
    },
    titleItemContent: {
        fontFamily: nbold,
        fontSize: 15,
        color: cblack,
    },
    itemContentDead: {
        padding: 20,
        paddingBottom: 8,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: cgray,
    }
});
