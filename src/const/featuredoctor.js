import React, { useState }from 'react';
import { TouchableOpacity,ScrollView,Image,Text,View,StyleSheet } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{FadeInDown} from 'react-native-reanimated';
import { COLORS,SIZES } from '../const/colors';
import { s as tw } from "react-native-wind";
import { themeColors } from './theme';
import { DocotorApi } from './apidata';



const FeatureCategoies = () => {

return (
 <Animated.View entering={FadeInDown.duration(1000).springify()}>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={tw`space-x-4`}>
      {
        DocotorApi.map((item,index) => {
            return(
            <TouchableOpacity
                key={index}
                style={tw`flex items-center p-2`}>
                
  <View style={style.container}>
    
    <View style={tw`flex-row justify-between mt-5`}>
      <Image source={require('../assets/heartlove.png')} style={tw`h-4 w-4 `} />
      
     <View style={tw`flex-row items-center space-x-1`}>
          <Image source={require('../assets/star.png')} style={tw`h-3 w-3 ml-4`} />
         <Text style={tw`text-black text-xs `}> {item.stars}</Text>    
        </View>
    </View>
       
    <Image style={style.photo} source={item.image_url}/>
      <View style={tw`px-3 pb-4 space-y-2 `}>
      <Text style={style.title}>{item.name}</Text>
        <Text style={style.category}> {item.price}</Text> 
       </View>
     </View>
                     
 </TouchableOpacity>
          )
        })
    }

  </ScrollView>
    </Animated.View>
  )
}


export default FeatureCategoies;


 const style = StyleSheet.create({ 
      
    container: {
      marginTop: 5,
      width: 95,
      height: 130,
      borderColor: '#cccccc',
      borderWidth: 1,
      backgroundColor: COLORS.white,
      borderRadius: 15,
      padding: 5,
      shadowColor: 'black',
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      // elevation: 2,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    photo: {
      width: 50,
      height: 60,
      borderRadius: 10,
      marginTop:5,    
    },

    title: {
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#444444',
      marginTop: 3,
           
    },
    category: {
      fontSize: 10,
      fontWeight:"600",
      textAlign:'center'
    }
    });
    