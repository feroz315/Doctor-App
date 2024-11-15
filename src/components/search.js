import React from 'react';
import {TextInput,TouchableHighlight, Dimensions,Image,SafeAreaView,StyleSheet,Text,View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../const/colors';



// const {width} = Dimensions.get('screen');
// const cardWidth = width / 2 - 20;


const Search = () => {
// const [ filter,setFilterData ] = useState([]);
// const [ search,setSearch ] = useState('');

// const SearchItem = useSelector(state => state.product);


// const SearchFilter = (text) => {
// if(text){
//   const newData = meals.filter((item) => {
//     console.log("data",newData)  
//    const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase(); 
//     const textData = text.toUpperCase();
//     return itemData.indexOf(textData) > -1;
//   });
//   setFilterData(newData);
//   setSearch(text);
// }else{
//   setFilterData(null);
//   setSearch(text);
//  }
// }
  
  
  return (
        <View style={style.inputContainer}>
          <TextInput
            style={{ fontSize: 14}}
            placeholder="Search"
            />   
        </View> 
    
          
    

  );
};

const style = StyleSheet.create({
 
  inputContainer: {
    marginTop:25,
    width:"90%",
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal:15,
    borderColor:COLORS.lightblue,
    

  },
 
  
});

export default Search;