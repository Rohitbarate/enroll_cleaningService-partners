import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Home = ({navigation}) => {
  const { height, width } = Dimensions.get("screen");

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          style={styles.img}
          source={require("../../assets/hand-img.png")}
        />
        <Text style={styles.text}>Want to be a HM partner</Text>
        <TouchableOpacity
        style={styles.btn}
        onPress={()=>navigation.navigate('DetailsForm')}
        >
          <Text style={styles.btnText} >Register Now</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 250,
    aspectRatio: 1,
    
  },
  text: {
    marginBottom: 20,
    fontSize:18,
    fontWeight:'500',
  },
  btn:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:'hsl(360,100%,50%)',
    borderRadius:5,
  },
  btnText:{
    fontSize:22,
    color:'hsl(0,50%,100%)'
  }
});
