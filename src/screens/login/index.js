import React,{ useState } from 'react';
import { TextInput } from 'react-native';
import { View,Text,SafeAreaView, TouchableOpacity,Alert } from 'react-native';
import COLORS from '../../const/colors';
import { Avatar } from 'react-native-paper';
import { StatusBar } from 'react-native';



const Login = ({navigation, route }) => {
  // const {id} = route?.params
  // console.log("🚀 ~ file: Login.js:11 ~ Loginscreen ~ id", id)
  
const SPACING = 9;
const [userName, setUserName] = useState("");
const [Password, setPassword] = useState("");


const Submit = () => {
    
 if(userName === '' && Password === '' ){
  Alert.alert('Please Enter your username & password !');
}else {
    navigation.navigate('Home',  { 
        Username: userName,
        
   });  
  }
}


return (
<>

<SafeAreaView style={{ flex:1,backgroundColor:COLORS.white }}>  
 <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

<View style={{marginTop:40,padding:10,marginLeft:10}}>
  <Text style={{ fontSize:32,color:COLORS.dark,marginBottom:5,marginLeft:10,fontFamily:'OpenSans-Bold',}}>Login!</Text>
  <Text style={{ fontSize:16.5,color:COLORS.gray,marginLeft:10,fontFamily:'Roboto-Medium',}}>Login in to continue</Text> 
</View>

<View>
<View style={{marginBottom:30,marginTop:30}}>
 <TextInput
      value={userName}
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='Enter your name'
      style={{ width:'85%',height:60,marginLeft:30,backgroundColor:COLORS.white,borderBottomWidth:1,borderColor:COLORS.gray}}
      onChangeText={(text) => setUserName(text)}/>
 </View>

<View>
  <TextInput
      value={Password}
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={true}
      placeholder='Enter your Password'    
      color={COLORS.blue}
      style={{ width:'85%',height:60,marginLeft:30,backgroundColor:COLORS.white,borderBottomWidth:1,borderColor:COLORS.gray}}
      onChangeText={(text) => setPassword(text)}/>
     </View>
</View>


<View style={{marginTop:20}}>
    <TouchableOpacity
        style={{
          padding: SPACING * 1,
          backgroundColor: COLORS.navy,
          borderRadius: 5,
          alignItems: "center",
          width:'60%',
          marginLeft:65,
          marginTop: SPACING * 5 }}
          onPress={(text) => Submit(text)}>
        <Text
          style={{
         color: COLORS.white,
            fontSize: 18,
            fontWeight: "500",
          }}>Login</Text>
      </TouchableOpacity>
     </View>

  <TouchableOpacity activeOpacity={0.7} onPress={() => Alert.alert('forget password')}>
      <Text style={{ fontSize:14,color:COLORS.dark,marginTop:10,fontFamily:'Roboto-Medium',textAlign:'center'}}>Forgot Password?</Text>
      </TouchableOpacity>
 
 <View style={{flexDirection:'row',justifyContent:'center'}}>
    <TextInput style={{ width:'38%',height:60,backgroundColor:COLORS.white,borderBottomWidth:1,borderColor:COLORS.gray}}/>
    <Text style={{marginTop:40,fontSize:16}}> or </Text>    
    <TextInput style={{ width:'38%',height:60,backgroundColor:COLORS.white,borderBottomWidth:1,borderColor:COLORS.gray}}/>
 </View>
 
 <View style={{marginTop:40,marginLeft:100,}}>
    <Text style={{fontSize:16,marginLeft:10,fontFamily:'Roboto-Medium'}}>Social Media Login</Text>

 <View style={{flexDirection:'row',justifyContent:'center',marginTop:5,marginRight:120}}>
    <Avatar.Image size={55} source={require('../../assets/apple.png')} style={{marginLeft:5,backgroundColor:COLORS.white}}/>
    <Avatar.Image size={55} source={require('../../assets/facebook.png')} style={{marginLeft:5,backgroundColor:COLORS.white}}/>
    <Avatar.Image size={55} source={require('../../assets/gmail.jpg')} style={{marginLeft:5,backgroundColor:COLORS.white}}/>
    </View>
 
 </View>
    

<View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
  <Text style={{fontSize:14,color:COLORS.gray,textAlign:'center',fontFamily:'Roboto-Medium'}}>Don't have on account? </Text>
    <TouchableOpacity activeOpacity={0.7} onPress={() => Alert.alert('Work')}>
      <Text style={{fontSize:12,color:COLORS.blue,textAlign:'center',fontFamily:'Roboto-Medium'}}> Sign up</Text>
      </TouchableOpacity>

</View>

</SafeAreaView>

</>

  );
}


export default Login;









