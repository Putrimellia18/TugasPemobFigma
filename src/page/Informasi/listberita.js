import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from 'react-native';
import { Tinju, LKPN, Beltim, LKPM } from "../../assets";

const ListBerita = () => {
    return (
        <View style={{flex: 1,flexDirection:'column', backgroundColor:'white'}}>
            <View style={[styles.container,{justifyContent: "center"}]}> 
                <Text style={styles.big}>Informasi dan Berita</Text>
            </View>
            <View style={styles.berita}>
              <View style={{flex : 1, alignItems:'center', padding: 5}}>
                <Image source={Tinju}/>
              </View>
              <View style={{flex : 4}}>
                <Text style={styles.textInformasi}>Adakan Kerjurkab Tinju 2022</Text>
                <Text style={{fontSize:12}}>20 Oktober 2021</Text>
              </View>
            </View>
            <View style={styles.berita}>
                <View style={{flex : 1, alignItems:'center', padding: 5}}>
                    <Image source={Beltim}/>
                </View>
                <View style={{flex : 4}}>
                    <Text style={styles.textInformasi}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                    <Text style={{fontSize:12}}>15 Oktober 2021</Text>
                </View>
            </View>
            <View style={styles.berita}>
                <View style={{flex : 1, alignItems:'center', padding: 5}}>
                    <Image source={LKPM}/>
                </View>
                <View style={{flex : 4}}>
                    <Text style={styles.textInformasi}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                    <Text style={{fontSize:12}}>8 Oktober 2021</Text>
                </View>
            </View>
            <View style={styles.berita}>
              <View style={{flex : 1, alignItems:'center', padding: 5}}>
                <Image source={Tinju}/>
              </View>
              <View style={{flex : 4}}>
                <Text style={styles.textInformasi}>Adakan Kerjurkab Tinju 2022</Text>
                <Text style={{fontSize:12}}>20 Oktober 2021</Text>
              </View>
            </View>
            <View style={styles.berita}>
                <View style={{flex : 1, alignItems:'center', padding: 5}}>
                    <Image source={Beltim}/>
                </View>
                <View style={{flex : 4}}>
                    <Text style={styles.textInformasi}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                    <Text style={{fontSize:12}}>15 Oktober 2021</Text>
                </View>
            </View>
            <View style={styles.berita}>
                <View style={{flex : 1, alignItems:'center', padding: 5}}>
                    <Image source={LKPM}/>
                </View>
                <View style={{flex : 4}}>
                    <Text style={styles.textInformasi}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                    <Text style={{fontSize:12}}>8 Oktober 2021</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width:420,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 8,
    },
    berita:{
        flexDirection:'row', 
        flex: 1,
        justifyContent:'space-between', 
        padding: 5, 
        borderBottomWidth:0.5, 
        borderTopWidth:0.5,
      },
    textInformasi:{
        color:'black', 
        fontFamily:'poppins', 
        fontWeight:'bold',
        fontSize:16
    },
    big: {
        fontSize: 18,
        textAlign: 'left',
        color:'black',
        fontWeight:'bold',
        paddingLeft: 10,
    },
});



export default ListBerita;