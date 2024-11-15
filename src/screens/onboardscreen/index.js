import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style';
import { StatusBar } from 'react-native';
import { COLORS } from "../../const/colors";





const Welcomeboard = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
       <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={styles.container}>
        <Image source={require('../../assets/doctor.png')} style={styles.image}></Image>

        <View style={styles.textView}>
          <Text style={styles.text}>SouthCity Hospital</Text>
          <View style={{ marginTop: 25 }}>
            <Text style={styles.textsmall}>Make an appointment with</Text>
            <Text style={styles.textsmall}>a doctor without a queue,</Text>
            <Text style={styles.textsmall}>buy medicines consult online.</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.btntext}>Start Now</Text>
      </TouchableOpacity>


    </SafeAreaView>


  )


}

export default Welcomeboard;