import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { back, Perahu, share, smp } from "../../assets";



const Informasi = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flexDirection: "column",  flex:1, backgroundColor:'white'}}>
          <View>
            <ImageBackground style={{height:300, width: 420}} source={smp}/> 
            <Image style={{height:20, width: 20, position:'absolute', top: 10, left: 10}} source={back}/> 
            <Image style={{height:20, width: 20, position:'absolute', top: 10, right: 10}} source={share}/>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}> 
            <Text style={styles.big}>SMP Negeri 4 Manggar Terima Bibit Buah</Text>
            <Text style={{left:10}}>20 Oktober 2021 </Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}>Manggar, Diskominfo Beltim— Anggota DPRD Kabupaten Belitung Timur (Beltim), Koko Haryanto mengatakan pemanfaatan lahan kosong ataupun kritis sangat penting dilakukan oleh masyarakat pasca tambang di Kabupaten Beltim.</Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}>Hal itu disampaikan Koko dalam Sosialisasi Pemulihan Lahan dan Penyerahan Bibit sekaligus penyerahan bibit buah oleh pihak Fordas Goes To School di SMP Negeri 4 Manggar,  Kamis (18/11).</Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}>“Dalam kegiatan Fordas Goes To School diharapkan ada kegiatan  pemulihan lahan-lahan, khususnya lahan pasca tambang. Lahan kritis itu nantinya akan dihijaukan kembali.,” ujar Koko.</Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}>Upaya dalam pemulihan lahan bekas tambang antara lain pihak Fordas membagikan bibit tanaman  buah seperti bibit kopi, alpukat dan buah-buahan lainnya sebanyak 100 bibit.</Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}> “Kami berharap bibit-bibit tersebut nantinya akan membuat hutan sekolah menjadi lebih hijau dan hasilnya bisa dinikmati  pihak sekolah,” kata Koko.</Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}>Selain memberikan bibit, Fordas juga melakukan MoU  kerjasama dengan  pihak SMP Negeri 4 Manggar yang tujuannya agar kedua belah pihak sama-sama melakukan pemulihan  lahan pasca tambang.</Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}>Sementara itu,  Hamsiyah selaku Kepala Sekolah SMP Negeri 4 Manggar, SMP Negeri 4 Manggar masih perlu pengijauan apalagi didukung halaman yang luas sehingga membutuhkan banyak tanaman. </Text>
          </View>
          <View style={[styles.container,{backgroundColor:'white'}]}>
            <Text style={styles.teks}>“Kami sangat berterima kasih dengan Fordas yang sudah memberikan bantuan bibit untuk pihak sekolah, ujar Hamsiyah</Text>
          </View>
        </View>
      </ScrollView>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
  big: {
    fontSize: 25,
    textAlign: 'left',
    padding:10,
    color:'black'    
  },
  teks:{
    padding:10,
  },
});



export default Informasi;