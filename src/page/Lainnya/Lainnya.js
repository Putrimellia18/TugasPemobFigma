
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { logo1, logo2 } from "../../assets";
const Flex = () => {
  return (
    <View style={{flexDirection: "column",  flex: 1}}>
      <View style={[styles.container,{flexDirection: "row", justifyContent: "space-between", padding: 20 }]}>
        <Image style={{height:60, width: 150, padding: 20}} source={logo2}/>
        <Image style={{height:60, width: 50, padding: 20}} source={logo1}/>
      </View>
      <View style={styles.container}>
        <Text style={{color:'black', fontSize:16}}>Tentang</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color:'black'}}>Favorit Destinasi</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color:'black'}}>Kritik dan Saran</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color:'black'}}>Nilai Aplikasi </Text>
      </View>
      <View style={[styles.container,{ justifyContent :"center", alignItems:"center"}]}>
        <Text style={{textAlign: "center", color:'black'}}> App Version 1.0 </Text>
        <Text style={{textAlign: "center", color:'black'}}> Hak Cipta 2021 </Text>
        <Text style={{textAlign: "center", color:'black'}}> Dinas Kebudayaan dan Pariwisata Belitung </Text>
        <Text style={{textAlign: "center", color:'blue'}}> www.disbudpar.beltim.go.id </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    padding: 20,
  },
  teks :{
    padding:10,
    color:'black'
  }
});

export default Flex;