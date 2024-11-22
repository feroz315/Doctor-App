import React from 'react'
import { StatusBar,TouchableOpacity,ScrollView,Image,StyleSheet,Text,View,TextInput } from 'react-native';
import { COLORS } from '../../const/colors';
import { s as tw } from "react-native-wind";
import Search from '../../components/search';





const FindDoctor = () => {

 return (
<>

<View style={tw`flex-row items-center mt-4 justify-between`}>
 <TouchableOpacity>
     <Image source={require('../../assets/arrowleft.png')} 
     style={{ width: 35,
      height:35,
      backgroundColor:COLORS.lightblue,
      borderRadius:10,      
      tintColor:COLORS.white
      
    }}/>
      </TouchableOpacity>

      <Text>Find Doctors</Text>

    </View>

   {/* search bar */}
     <Search />

<View>


  
</View>






</>

  )
}



export default FindDoctor;