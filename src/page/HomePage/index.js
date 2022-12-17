import { StyleSheet, Text, View, Image, ScrollView, Button, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { Geosite, Logo, Hati, Cari, Perahu, Kategori, Covid, Tinju, Beltim, LKPM} from '../../assets';

const Separator = () => (
  <View style={styles.separator} />
);

const HomePage = (navigation) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor:'white'}}>
          <View style={{flexDirection: "row", flex: 1, justifyContent : "space-between", padding : 10}}>
              <View style={{flex : 1,alignItems: "center", padding: 5}}>
                <Image source={Logo}></Image>
              </View >
              <View style={{padding : 10,flex: 4,height : 40,width : 300,borderWidth:2, flexDirection: "row", borderRadius:40}}>
                <View><Image source={Cari} style={{height : 20, width: 20}}></Image></View>
                <View><Text style={{color:"black", fontFamily:'poppins'}}>  Cari Wisata</Text></View>
              </View>
              <View style={{padding : 5, flex : 1,alignItems: "center"}}>
                <Image source={Hati} style={{height : 30, width : 30}}></Image>
              </View>
          </View>
          <View style={{flexDirection: "column", flex: 1}}>
            <Image source={Geosite} style={{height: 400, width: 450}}></Image>
            <Text style={{top : 280, left : 20, fontFamily :"Roboto",fontSize: 12,lineHeight: 14.06,position : "absolute", color:"white"}}>Wisata Air</Text>
            <Text style={styles.destinasi2}>Pulau Bukulimau</Text>
            <Text style={styles.destinasi3}>UnderWater</Text>
          </View>
          <View style={{flexDirection: "column", flex: 1, alignItems:"center", padding: 10}}>
            <Text style={{fontWeight:"bold", color:"black", fontFamily:'Poppins', fontSize: 20}}>Destinasi Wisata</Text>
            <Text style={{color:"gray"}}>Pilihan Terbaik</Text>
          </View>
          <View style={styles.image_destinasi}>
            <View style={{flex:1,borderRadius:20, alignItems:"center"}}>
              <Image source={Perahu} style={{borderRadius:20}}></Image>
              <Text style={styles.destinasi}>Pantai Serdang</Text>
            </View>
            <View style={{flex:1, borderRadius:20, alignItems:"center"}}>
              <Image source={Perahu} style={{borderRadius:20}}></Image>
              <Text style={styles.destinasi}>Pantai Serdang</Text>
            </View>
          </View>
          <View style={styles.image_destinasi}>
            <View style={{flex:1,borderRadius:20, alignItems:"center"}}>
              <Image source={Perahu} style={{borderRadius:20}}></Image>
              <Text style={styles.destinasi}>Pantai Serdang</Text>
            </View>
            <View style={{flex:1, borderRadius:20, alignItems:"center"}}>
              <Image source={Perahu} style={{borderRadius:20}}></Image>
              <Text style={styles.destinasi}>Pantai Serdang</Text>
            </View>
          </View>
          <View style={{height:80, width:420, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#0085CC', fontSize : 16, fontFamily:'Poppins'}}>Lainnya</Text>
          </View>
          <Separator/>
          <View style={{flex: 1, alignItems:"center", padding: 10}}>
            <Text style={{fontWeight:"bold", color:"black", fontFamily:'Poppins', fontSize: 20}}>Jelajahi Sekarang</Text>
            <Text style={{color:"gray"}}>Pilih kategori yang diminati</Text>
          </View>
          <View>
            <Image source={Kategori} style={{width:420, height :220}}></Image>
          </View>
          <View style={{padding:20, justifyContent:'center', flex:1}}>
            <Image source={Covid} style={{width:380, height :210, borderRadius:10}}/>
          </View>
          <View style={{flex: 1, alignItems:"center", padding: 10}}>
            <Text style={{fontWeight:"bold", color:"black", fontFamily:'Poppins', fontSize: 20}}>Informasi dan Berita</Text>
            <Text style={{color:"gray"}}>Seputar Belitung Timur</Text>
          </View>
          <View style={{flexDirection:'column'}}>
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
          <View style={{height:100, width:420, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#0085CC', fontSize : 16, fontFamily:'Poppins'}}>Informasi Lainnya</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  destinasi :{
    fontFamily : "Poppins",
    fontSize : 16,
    color : "black",
    position : 'absolute',
    top :135,
    left :30, 
    lineHeight : 18,
    fontWeight :"bold",
  },
  image_destinasi:{
    flexDirection: "row", 
    flex: 1, 
    justifyContent : "space-around", 
    padding : 10, 
    borderRadius:40
  },
  destinasi2 :{
    fontFamily : "poppins",
    fontSize : 30,
    color : "white",
    position : 'absolute',
    top :300,
    left :20, 
    lineHeight : 31,
    fontWeight :"bold",
  },
  destinasi3 :{
    fontFamily : "poppins",
    fontSize : 30,
    color : "white",
    position : 'absolute',
    top :350,
    left :20, 
    lineHeight : 31,
    fontWeight :"bold",
  },
  separator: {
    marginVertical: 18,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
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
})