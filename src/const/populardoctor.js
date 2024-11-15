import React, { useState }from 'react';
import { TouchableOpacity,ScrollView,Image,Text,View,StyleSheet } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{FadeInDown} from 'react-native-reanimated';
import { COLORS,SIZES } from '../const/colors';
import { s as tw } from "react-native-wind";
import { themeColors } from './theme';
import { DocotorApi } from './apidata';



const PopularCategoies = () => {

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
    <Image style={style.photo} source={item.image_url}/>
      <View style={tw`px-3 pb-4 space-y-2 `}>
      <Text style={style.title}>{item.name}</Text>
        <Text style={style.category}> {item.speciality}</Text> 
        <View style={tw`flex-row items-center space-x-1`}>
          <Image source={require('../assets/star.png')} style={tw`h-4 w-4 ml-3`} />
            <Text style={tw`text-black `}> {item.stars}</Text>    
        </View>
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


export default PopularCategoies;


 const style = StyleSheet.create({ 
      
    container: {
      marginTop: 5,
      width: 110,
      height: 160,
      borderColor: COLORS.lightblue,
      borderWidth: 0.5,
      backgroundColor: 'white',
      borderRadius: 10,
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
      width: 110,
      height: 100,
      borderRadius: 15,
      backgroundColor:COLORS.lightblue   
    },

    title: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#444444',
      marginTop: 2,
      
      
    },
    category: {
      fontSize: 11,
      fontWeight:"600",
      textAlign:'center'
    }
    });
    