import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import COLORS from '../../const/colors';
import { Avatar } from 'react-native-paper';
import { StatusBar } from 'react-native';



const Signup = ({ navigation, route }) => {
  // const {id} = route?.params
  // console.log("🚀 ~ file: Login.js:11 ~ Loginscreen ~ id", id)

  const SPACING = 9;
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");



  const Submit = () => {

    if (userName === '' && Password === '') {
      Alert.alert('Please Enter your username & password !');
    } else {
      navigation.navigate('Home', {
        Username: userName,

      });
    }
  }


  return (
    <>

      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
       <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

        <View style={{ marginTop: 40, padding: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 32, color: COLORS.dark, marginBottom: 5, marginLeft: 10, fontFamily: 'OpenSans-Bold', }}>Welcome!</Text>
          <Text style={{ fontSize: 16.5, color: COLORS.gray, marginLeft: 10, fontFamily: 'Roboto-Medium', }}>Signup in to continue</Text>
        </View>

        <View style={{ marginBottom: 30, marginTop: 40 }}>
         <View >
            <TextInput
              value={userName}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Enter your name'
              style={{ width: '85%', height: 60, marginLeft: 30, backgroundColor: COLORS.white, borderBottomWidth: 1, borderColor: COLORS.gray }}
              onChangeText={(text) => setUserName(text)} />
          </View>
          
          <View>
            <TextInput
              value={Password}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              placeholder='Enter your Password'
              color={COLORS.blue}
              style={{ width: '85%', height: 60, marginLeft: 30, backgroundColor: COLORS.white, borderBottomWidth: 1, borderColor: COLORS.gray }}
              onChangeText={(text) => setPassword(text)} />
          </View>

          <View>
            <TextInput
              value={email}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              placeholder='Enter your Email'
              color={COLORS.blue}
              style={{ width: '85%', height: 60, marginLeft: 30, backgroundColor: COLORS.white, borderBottomWidth: 1, borderColor: COLORS.gray }}
              onChangeText={(text) => setEmail(text)} />
          </View>

          <View>
            <TextInput
              value={address}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              placeholder='Enter your Address'
              color={COLORS.blue}
              style={{ width: '85%', height: 60, marginLeft: 30, backgroundColor: COLORS.white, borderBottomWidth: 1, borderColor: COLORS.gray }}
              onChangeText={(text) => setPassword(text)} />
          </View>

        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              padding: SPACING * 1,
              backgroundColor: COLORS.navy,
              borderRadius: 5,
              alignItems: "center",
              width: '60%',
              marginLeft: 65,
              marginTop: SPACING * 5
            }}
            onPress={(text) => Submit(text)}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                fontWeight: "500",
              }}>Sign up</Text>
          </TouchableOpacity>
        </View>      
      
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30,marginRight:20 }}>
          <Text style={{ fontSize: 14, color: COLORS.gray, textAlign: 'center', fontFamily: 'Roboto-Medium' }}>Don't have on account? </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => Alert.alert('Work')}>
            <Text style={{ fontSize: 12, color: COLORS.blue, textAlign: 'center', fontFamily: 'Roboto-Medium' }}>Login</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>

    </>

  );
}


export default Signup;









