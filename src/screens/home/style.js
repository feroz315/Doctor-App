import { Dimensions, StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../const/colors";


const { width, height } = Dimensions.get("window")


const styles= StyleSheet.create({
  topContainer:{
    backgroundColor:COLORS.lightblue,
    paddingHorizontal:width*0.03,
    zIndex:99,
    height:190,
    borderBottomEndRadius:35,
    borderBottomLeftRadius:35,
    
  },
  topContainerImage:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    marginTop:45,
  },
  
docotr_container: {
  padding: SIZES.padding * 1,
  paddingBottom: 5,
},

Popular_Doctor:{
  fontSize:18,
  marginLeft:15,
  fontWeight:'600',
  fontFamily: "Poppins-Regular",
  marginBottom:5,
  marginTop:10
},



  });



export default styles;