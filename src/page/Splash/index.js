import { StyleSheet, Text, View, Image} from 'react-native'
import React, {useEffect} from 'react'
import { logo1,logo2,logo3, logo4 } from '../../assets';

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout ( () => {
      navigation.replace('MainApp');
    },3000)
  },[navigation]);
  return (
    <View style={[styles.all, {flexDirection: "column"}]}>

          <View style={[styles.container, {flexDirection: "row"}]}>
            <View style={{ flex: 1}} />
                <Image style={styles.logo} source={logo1} />
          </View>
          <View style={[styles.container, {flexDirection: "row"}]}>
            <View style={{ flex: 1}} />
                <Image style={styles.logo2} source={logo2} />
          </View>
          <View style={[styles.container, {flexDirection: "row"}]}>
            <View style={{ flex: 1}} />
                <Image style={styles.logo3} source={logo3} />
          </View>
          <View style={[styles.container, {flexDirection: "row"}]}>
            <View style={{ flex: 1}} />
                <Image style={styles.logo4} source={logo4} />
          </View>
          <View style={[styles.botheader, {flexDirection: "row"}]}>
            <View style={{flex: 1, alignContent :'center'}} />
              <Text style={styles.text}>Didukung oleh</Text>
          </View>

    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 102, height: 120, marginTop: 200, marginRight: 155,
  },
  logo2: {
     width: 126.32, height: 68.47, marginTop: 330, marginRight: 135,
  },
   logo3: {
     width: 38, height: 48, marginTop: 570 , marginRight: 230,
  },
  logo4: {
     width: 48, height: 48, marginTop: 570 , marginRight: 130,
  },
  text: {
     width: 100, height: 20, marginTop: 535, marginRight: 150,color: 'black',
  },
   
  container: {
    flex: 1,
    padding: 0,
  },
});

export default Splash