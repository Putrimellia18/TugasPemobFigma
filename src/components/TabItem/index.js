import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Home,HomeOff,Destinasi,DestinasiOff,Informasi,InformasiOff,Lainnya,LainnyaOff} from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if(label=="Beranda") return isFocused ? <Home/> : <HomeOff/>
        if(label=="Destinasi") return isFocused ? <Destinasi/> : <DestinasiOff/>
        if(label=="Informasi") return isFocused ? <Informasi/> : <InformasiOff/>
        if(label=="Lainnya") return isFocused ? <Lainnya/> : <LainnyaOff/>
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon/>
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text:(isFocused)=>({
        fontSize:11,
        fontFamily:'Poppins',
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop : 8,

    })
})