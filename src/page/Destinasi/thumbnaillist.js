import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView} from 'react-native';

const ThumbnailList = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.header, {flexDirection: "row"}]}>
                <View style={{padding:10}} />
                  <Text style={[styles.text,{textAlign:'left'}]}>Destinasi</Text>
                <View style={{ flex: 2}} />
                  <Image
                    source={{ uri: 'https://fandyhome.files.wordpress.com/2022/12/search.png' }}
                    style={{ width: 35, height: 35, position: 'absolute', opacity: 0.5, borderRadiu4: 40, top: 4, left: 300}}
                  />
                  <Image
                    source={{ uri: 'https://fandyhome.files.wordpress.com/2022/12/map.png' }}
                    style={{ width: 35, height: 35, position: 'absolute', opacity: 0.5, borderRadiu4: 40, top: 4, left: 350}}
                  />
                </View>
                <View style={[styles.botheader, {flexDirection: "row"}]}>
                    <View style={{ flex: 4}} />
                    <View style={ styles.kotak } />
                    <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 125, left: 215 }}>Vihara Patung</Text>
                    <Text style={styles.semua}>Semua</Text>
                    <View style={{ flex: 4}} />
                    <Text style={styles.wisataalam}>Wisata Alam</Text>
                    <View style={{ flex: 4}} />
                    <Text style={styles.wisataair}>Wisata Air</Text>
                    <View style={{ flex: 4}} />
                    <Text style={styles.wisatakota}>Wisata Kota</Text>
                </View>

                <View style={[styles.container, {flexDirection: "row"}]}>
                    <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://bangkatour.com/wp-content/uploads/2017/03/pantai-serdang-belitung-timur.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 20 }}>Pantai Serdang</Text>
                    <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://backpackerjakarta.com/wp-content/uploads/2017/12/patung-Dewi-Kwan-Im-pematang-siantar-e1512964568945.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 125, left: 215 }}>Vihara Patung</Text>
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 215 }}>Dewi Khan Im</Text>
                </View>

                <View style={[styles.container, {flexDirection: "row"}]}>
                    <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b6/45/ca/replika-sd-laskar-pelangi.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 125, left: 20 }}>Replika SD Laskar</Text>
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 20 }}>Pelangi</Text>
                    <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://cdn-2.tstatic.net/belitung/foto/bank/images/sunrice_20180608_104815.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 125, left: 215 }}>Pantai Nyiur</Text>
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 215 }}>Melambai</Text>
                </View>

                <View style={[styles.container, {flexDirection: "row"}]}>
                    <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://bangkatour.com/wp-content/uploads/2017/03/pantai-serdang-belitung-timur.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 20 }}>Pantai Serdang</Text>
                    <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://backpackerjakarta.com/wp-content/uploads/2017/12/patung-Dewi-Kwan-Im-pematang-siantar-e1512964568945.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 125, left: 215 }}>Vihara Patung</Text>
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 215 }}>Dewi Khan Im</Text>
                </View>

                <View style={[styles.container, {flexDirection: "row"}]}>
                    <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b6/45/ca/replika-sd-laskar-pelangi.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 125, left: 20 }}>Replika SD Laskar</Text>
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 20 }}>Pelangi</Text>
                <View style={{ flex: 1}} />
                        <Image
                        source={{ uri: 'https://cdn-2.tstatic.net/belitung/foto/bank/images/sunrice_20180608_104815.jpg' }}
                        style={{ width: 180, height: 200, borderRadius: 15 }}
                        />
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 125, left: 215 }}>Pantai Nyiur</Text>
                        <Text style={{ fontFamily: "Courier-Bold", fontWeight: "bold", color: 'white', position: 'absolute', fontSize: 20, top: 150, left: 215 }}>Melambai</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#EBECF0',
  },
  footer: {
    marginTop: 12,
    borderTopWidth: 2,
    borderTopColor: '#EBECF0',
  },
  textfooter: {
    marginBottom: 10,
  },
  botheader: {
    marginTop: 10,
    marginEnd: 19,
  },
  container: {
    margin: 5,
    marginEnd: 18,
  },
  text: {
    color: 'grey',
    fontSize: 20,
    marginTop: 7,
    marginLeft: 10,
    marginBottom: 15,
  },
  search: {
    color: 'grey',
    fontSize: 30,
    marginLeft: 200,
    marginBottom: 15,
    marginTop: 7,
  },
  map: {
    color: 'grey',
    fontSize: 25,
    marginEnd: 15,
    marginBottom: 15,
    marginTop: 7,
  },
  iconfooter: {
    marginTop: 8,
    marginRight: 35,
  },
  teksfooter: {
    marginRight: 16,
    fontSize: 15,
    color: 'grey'
  },
  semua: {
    fontFamily: "Courier-Bold", 
    color: '#0085CC', 
    position: 'absolute', 
    fontSize: 15, 
    top: 10, 
    left: 31,
  },
  kotak: {
    height: 30,
    width: 70,
    color: '#0085CC',
    fontSize: 15,
    backgroundColor: '#EBF5Ff',
    marginTop: 7,
    marginStart: 20,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wisataalam: {
    color: 'grey',
    fontSize: 15,
    marginTop: 10,
    marginStart: 20,
    marginBottom: 10,
  },
  wisataair: {
    color: 'grey',
    fontSize: 15,
    marginTop: 10,
    marginStart: 20,
    marginBottom: 10,
  },
  wisatakota: {
    color: 'grey',
    fontSize: 15,
    marginTop: 10,
    marginStart: 20,
    marginBottom: 10,
  },
});

export default ThumbnailList;