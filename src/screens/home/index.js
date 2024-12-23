import React, { useEffect } from 'react';
import { StatusBar,TouchableOpacity,ScrollView,Image,StyleSheet,Text,View,TextInput } from 'react-native';
import { COLORS,SIZES, FONTS } from '../../const/colors';
import { s as tw } from "react-native-wind";
import Search from '../../components/search';
import styles from '../home/style';
import DoctorCategoies from '../../const/doctorcategories';
import PopularCategoies from '../../const/populardoctor';
import MedicalCategoies from '../../const/medicalparts';
import FeatureCategoies from '../../const/featuredoctor';



const HomeScreen = () => {


useEffect(() => {
 <DoctorCategoies />
},[])

 useEffect(() => {   
  <MedicalCategoies />
 },[])

 useEffect(() => {   
  <PopularCategoies />
 },[])
 
 useEffect(() => {   
  <FeatureCategoies />
 },[])


return (
   <View style={tw`flex-1 bg-white`}>
   <StatusBar
    translucent
    backgroundColor={Platform.OS === "ios" ? COLORS.primary : COLORS.blue}
    barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"} />

<View style={styles.topContainer}>
   <View style={styles.topContainerImage}>
    <View>
    <Text style={tw`text-xl text-white`}>Hi User!</Text>
     <Text style={tw`font-bold text-3xl text-white`}>Find Your Doctor</Text>
     </View>
    <TouchableOpacity>
     <Image source={require('../../assets/avatar.png')} style={{ width: 55,height:55}}/>
      </TouchableOpacity>
    </View>
         {/* search bar */}
         <Search />
 </View>
 
 <ScrollView>


{/* Live Doctor  */ }     
<View style={styles.view_container}>
   <Text style={styles.Popular_Doctor}>Live Doctors</Text>
   <DoctorCategoies /> 
  </View>


{/* medical body parts  */ }     
<View style={styles.view_container}>
  <MedicalCategoies />
     </View>


{/* Popular Doctor  */ }     
<View style={styles.view_container}>
   <Text style={styles.Popular_Doctor}>Popular Doctors</Text>
   <PopularCategoies />
    </View>


{/* Feature Doctor  */ }     
<View style={styles.view_container}>
   <Text style={styles.Popular_Doctor}>Feature Doctors</Text>
    <FeatureCategoies />
    </View>


</ScrollView>
</View>

  )
};



export default HomeScreen;


























// {/* Recipes Data  */ }
// <View style={style.headinglist}>
// <RecipesList meals={meals} categories={categories} />
//  </View>





























































































































































// import React, { useEffect, useState } from 'react';
// import { StatusBar,TouchableOpacity,ScrollView,Image,StyleSheet,Text,View,TextInput } from 'react-native';
// import { COLORS,SIZES, FONTS } from '../Const/theme';
// import CategoiesList from '../Categories/CategoiesList';
// import RecipesList from '../Categories/RecipesList';
// import axios from 'axios';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { BellIcon } from 'react-native-heroicons/outline'
// import { s as tw } from "react-native-wind";
// import Search from './Search';
// import { restaurantrecipe } from '../Const/ApiData';
// import RestaurantRow from '../Const/RestaurantRow';




// const HomeScreen = () => {
  
// const [categories,setCatgories ] = useState([]);
// const [activeCategory, setActiveCategory] = useState('Beef');
// const [meals, setMeals] = useState([]);



// useEffect(() => {
// getCategories()
// getRecipes()

// },[])


// const getCategories = async () => {
//   try {
//     const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
//     console.log(res.data.categories)
//     if(res && res.data){
//     setCatgories(res.data.categories)
//     } 
//   }catch (error) {
//     console.error(error);

//  }
// }

// const getRecipes = async (category= "Beef") => {
//   try {
//     const resRecipes = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
//     console.log(resRecipes.data)
//     if(resRecipes && resRecipes.data){
//       setMeals(resRecipes.data.meals)
//      }
//   } catch (error) {
//     console.log(error)
//   }
// }

// const handleChangeCategory = category=>{
//   getRecipes(category);
//   setActiveCategory(category);
//   setMeals([]);
  
// }


// return (
//    <View style={tw`flex-1 bg-white`}>
//    <StatusBar style="dark" />

//    <View style={tw`mx-4 flex-row justify-between items-center mt-12`}>
//    <TouchableOpacity>
//      <Image source={require('../assets/images/avatar.png')} style={{height: hp(5), width: hp(5.5)}} />
//      </TouchableOpacity>
//        {/* search bar */}
//        <Search meals={meals}/>
//    <BellIcon size={hp(4)} color="gray" />       
//   </View>


//     {/* main */}
//    <ScrollView
//    showsVerticalScrollIndicator={false}
//    contentContainerStyle={{paddingBottom: 50}}
//    style={tw`space-y-6 `}>
 
              
// {/* Categories Data  */ }     
//     <View style={style.view_container}>
//    <Text style={{fontSize:hp(3.2),fontWeight:'600',marginBottom:5}}>Categories</Text>
//    {categories.length > 0 && 
//   <CategoiesList 
//   categories={categories} 
//   activeCategory={activeCategory} 
//   handleChangeCategory={handleChangeCategory} 
//   /> }
//   </View>
    
//   {/* Restaurant card */}
//     <View style={tw`mt-3`}>
//        {
//       [restaurantrecipe].map((item,index) => {
//         return(
//             <RestaurantRow 
//             key={index}
//             title={item.title}
//             description={item.description}
//             resturants={item.restaurants}
//             />
//         )
//       })
//   }
    
//   </View>

// {/* Recipes Data  */ }
//  <View style={style.headinglist}>
// <RecipesList meals={meals} categories={categories} />
//  </View>
// </ScrollView>
// </View>

//   )
// };


// const style = StyleSheet.create({
//   header: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
  
// container: {
//   margin: 8,
//   width: (SIZES.width * 0.5 - 24),
//   height: 170,
//   justifyContent: 'space-between',
//   alignItems: 'center',
  
// },

// image: {
//   width: '100%',
//   height: 130,
//   borderRadius: SIZES.radius,
 
// },

// name_price_container: {
//   padding: SIZES.padding,
//   position: 'absolute',
//   bottom: 0,
//   height: 45,
//   width: '100%',
//   borderRadius: 25,
//   justifyContent: 'center',
//   alignItems: 'center',
// },

// name: {
//   ...FONTS.h2,
//   color: COLORS.black,
//   textAlign: 'center'
// },

// price: {
//   ...FONTS.h4,
//   color: COLORS.primary
// },
// heading: {
//   ...FONTS.h2,
//   paddingLeft: 23,
//   paddingBottom: 10
// },

// containerlist: {
//   padding: SIZES.padding ,
//   paddingBottom: SIZES.padding * 3,
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginRight: SIZES.padding,
//   borderRadius: 40,
   
// },

// image_container: {
//   width: 62,
//   height: 50,
//   borderRadius: 35,
//   alignItems: 'center',
//   justifyContent: 'center',

// },

// text: {
//   textAlign: 'center',
//   marginTop: SIZES.padding,
//   ...FONTS.body3
// },

// view_container: {
//   padding: SIZES.padding * 2,
//   paddingBottom: 10,
// },

// shadow: {
//   shadowColor: "#000",
//   shadowOffset: {
//       width: 0,
//       height: 3,
//   },
//   shadowOpacity: 0.1,
//   shadowRadius: 3,
//   elevation: 3,

// },
// headinglist: {
//   ...FONTS.h2,
//   paddingLeft: 5,
//   marginTop:3

// },
// search_bar_image: {
//   flexDirection: 'row',
//   width: '80%',
//   height: '100%',
//   marginLeft:13,
//   backgroundColor: COLORS.lightGray3,
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: SIZES.radius,
// },

// search_bar_text: {
//   ...FONTS.h4,
//   flex: 1,
//   marginEnd: 16
// },


// });



// export default HomeScreen;



