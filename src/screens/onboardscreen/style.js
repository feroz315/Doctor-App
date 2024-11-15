import { StyleSheet,Dimensions  } from "react-native";
import { COLORS } from "../../const/colors";
// import { COLORS } from '../Const/theme';

const { width } = Dimensions.get("screen");
const SPACING = 10;


const styles = StyleSheet.create({
      
    container: {
        flex:0.90,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30    
        
    },
    image: {
        width: width * 0.90,
        height: 290,
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
               
    },
    textView:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
                          
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:'bold',
        fontSize:38,
        color:COLORS.navy      
    },
    textsmall:{
        fontFamily:"Poppins",
        fontWeight:'400',
        fontSize:17,
        marginTop:3,
        textAlign:'center',
        color:COLORS.navy    

    },
    Btn:{
        width: width * 0.75,
        height:45,
        backgroundColor: COLORS.navy,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        marginTop:40,
        marginLeft:50
    },
    btntext:{
        fontSize:16,
        color: COLORS.white,
        textAlign:'center'

        
    }
    


    
});




export default styles;