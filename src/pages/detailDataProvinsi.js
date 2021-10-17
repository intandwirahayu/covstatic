import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconFemale, IconMale, IconMeninggal, IconPopulation, IconPositif, IconSembuh, IconTreated } from '../assets';
import { HeaderBack, ItemDataAge, ItemDataGlobal, ItemStatistic } from '../components';
import { cblack, cgray, cpurple, nbold, nregular } from '../utils';

const DetailDataProvinsi = ({route}) => {
    const allData = route.params.allData;
    const kelompokUmur = allData.kelompok_umur;

    return (
        <ScrollView style={styles.containerPage}>
            <View style={{paddingLeft: 20, paddingRight: 45}}>
                <HeaderBack namePage="Detail Data Provinsi"/>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.containerContent1}>
                <ItemStatistic iconData={<IconPositif/>} nameData="Total Positif" countData={allData.jumlah_kasus}/>
                <ItemStatistic iconData={<IconSembuh/>} nameData="Total Sembuh" countData={allData.jumlah_sembuh}/>
                <ItemStatistic iconData={<IconMeninggal/>} nameData="Total Meninggal" countData={allData.jumlah_meninggal}/>
            </ScrollView>

            <View style={styles.containerContent2}>
                <View>
                    <Text style={styles.labelProvince}>Provinsi</Text>
                    <Text style={styles.nameCountry}>{allData.key}</Text>
                </View>

                <View style={styles.containerRegion}>
                    <View style={styles.itemRegion}>
                        <IconPopulation/>
                        <Text style={[{width: 100, height: 20}, styles.valueRegion]}>populasi : {allData.doc_count}</Text>
                    </View>

                    <View style={styles.itemRegion}>
                        <IconTreated/>
                        <Text style={styles.valueRegion}>dirawat : {allData.jumlah_dirawat}</Text>
                    </View>
                </View>

                <View style={styles.containerRegion}>
                    <View style={[{width: 114, height: 30}, styles.containerRegion2]}>
                        <Text style={styles.valueRegion2}>Lon : {allData.lokasi.lon}</Text>
                    </View>

                    <View style={[{width: 114, height: 30}, styles.containerRegion2]}>
                        <Text style={styles.valueRegion2}>Lat : {allData.lokasi.lat}</Text>
                    </View>
                </View>

                <View style={{marginVertical: 25}}>
                    <Text style={styles.titleItemContent}>Penambahan</Text>

                    <Text style={styles.valueCountPeople}>Positif : {allData.penambahan.positif}</Text>
                    <Text style={styles.valueCountPeople}>Sembuh : {allData.penambahan.sembuh}</Text>
                    <Text style={styles.valueCountPeople}>Meninggal : {allData.penambahan.meninggal}</Text>
                </View>

                <View style={{paddingBottom: 25}}>
                    <Text style={styles.titleItemContent}>Jenis Kelamin</Text>

                    <ItemDataGlobal iconData={<IconMale/>} titleData="Laki - laki" countData={allData.jenis_kelamin[0].doc_count}/>
                    <ItemDataGlobal iconData={<IconFemale/>} titleData="Perempuan" countData={allData.jenis_kelamin[1].doc_count}/>
                </View>

                <View style={{paddingBottom: 50}}>
                    <Text style={styles.titleItemContent}>Kelompok Umur</Text>

                    <View style={styles.containerRangeAge}>
                        {
                            kelompokUmur.map((itemKelompok, index) => {
                                return(
                                    <ItemDataAge 
                                        key={index} 
                                        rangeAge={itemKelompok.key} 
                                        countPeople={itemKelompok.doc_count} 
                                        age={itemKelompok.usia.value} 
                                    />
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailDataProvinsi;

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
    labelProvince: {
        fontFamily: nbold,
        fontSize: 12,
        color: cblack,
        opacity: 0.8
    },
    nameCountry: {
        fontFamily: nbold,
        fontSize: 20,
        color: cblack,
        textTransform: 'capitalize'
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
    containerRegion2: {
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 7,
        marginRight: 10,
        backgroundColor: cgray,
        alignItems: 'center'
    },
    valueRegion2: {
        fontFamily: nbold,
        fontSize: 12,
        color: cblack,
        opacity: 0.8,
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
        marginBottom: 20,
    },
    containerRangeAge: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
});
