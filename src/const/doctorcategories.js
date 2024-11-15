import React, { useState }from 'react';
import { TouchableOpacity,ScrollView,Image,Text,View,StyleSheet } from 'react-native';
import Animated,{FadeInDown} from 'react-native-reanimated';
import { COLORS,SIZES } from '../const/colors';
import { s as tw } from "react-native-wind";

import { DocotorApi } from './apidata';


const DoctorCategoies = () => {
const [bgColor, setBgColor] = useState('')

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
                style={tw`flex items-center p-2`}
                >
                <View style={tw`rounded-full p-[6px]`}>
                <Image 
                  source={item.image_url}
                  onPress={() => setBgColor(index)}
                  style={{width:70,height:70,borderRadius:40,backgroundColor:COLORS.navy }}/>
                </View>
                <Text style={{fontSize:10,fontWeight:'700',marginTop:5}}>{item.name}</Text>        
                
                </TouchableOpacity>
          )
        })
    }

  </ScrollView>
    </Animated.View>
  )
}


export default DoctorCategoies;


 const style = StyleSheet.create({ 
    containerlist: {
      padding: SIZES.padding ,
      paddingBottom: SIZES.padding * 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: SIZES.padding,
      borderRadius: 40,
       
    },
    
    image_container: {
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    
    },
    
    });
    