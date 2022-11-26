import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, TextInput, Button,TouchableOpacity } from 'react-native'
import React from 'react'

const DetailsForm = ({navigation}) => {
  const { height,width } = Dimensions.get('screen');

  return (
    <KeyboardAvoidingView style={[styles.container,{width:width}]}>
      <Text style={{fontSize:22,textAlign:'center',fontWeight:'600'}}>Few Steps to be a HM partner</Text>
      <ScrollView 
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputRow}>
        <Text style={styles.label} >Owner Name :</Text>
        <TextInput
          placeholderTextColor="hsl(100,0%,65%)"
          style={styles.input}
          placeholder="Rohit Barate"

        />
        </View>
        <View style={styles.inputRow}>
        <Text style={styles.label} >Business/Centre Name :</Text>
        <TextInput
          placeholderTextColor="hsl(100,0%,65%)"
          style={styles.input}
          placeholder="Car Bath"
        />
        </View>
        <View style={styles.inputRow}>
        <Text style={styles.label} >Experience (years) :</Text>
        <TextInput
          placeholderTextColor="hsl(100,0%,65%)"
          style={styles.input}
          placeholder="10"
          keyboardType="numeric"
        />
        </View>
        <View style={styles.inputRow}>
        <Text style={styles.label} >Number of Workers :</Text>
        <TextInput
          placeholderTextColor="hsl(100,0%,65%)"
          style={styles.input}
          placeholder="5"
          keyboardType="numeric"
        />
        </View>
        <View style={styles.inputRow}>
        <Text style={styles.label} >Address :</Text>
        <TextInput
          placeholderTextColor="hsl(100,0%,65%)"
          style={styles.input}
          placeholder="pimpri chowk,pune,Maharashtra"
        />
        </View>
        <View style={styles.inputRow}>
        <Text style={styles.label} >Pincode :</Text>
        <TextInput
          placeholderTextColor="hsl(100,0%,65%)"
          style={styles.input}
          placeholder="412114"
          keyboardType="numeric"
        />
        </View>
      <View style={styles.btnView} >
        <TouchableOpacity
        style={styles.btn}
        onPress={()=>navigation.goBack()}
        >
          <Text style={styles.btnText} >Back</Text>
          </TouchableOpacity> 
        <TouchableOpacity
        style={styles.btn}
        onPress={()=>navigation.navigate('ServicesForm')}
        >
          <Text style={styles.btnText} >Next</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default DetailsForm

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
    paddingHorizontal:16,
    alignItems:'stretch',
    paddingTop:20
  },
  scrollView:{
    marginVertical:15,
    paddingVertical:10,
    
  },
  inputRow:{
    marginBottom:20,
    width:'100%'
  },
  label:{
    fontSize:18,
    fontWeight:'500',
    color:'hsl(100,0%,30%)',
  },
  input: {
    height: 50,
    marginTop: 5,
    width :'100%',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius:5,
    fontSize:20,
    color:'hsl(100,0%,0%)',
    letterSpacing:1
  },
  btnView:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingBottom:20
  },
  btn:{
    paddingHorizontal:15,
    paddingVertical:5,
    backgroundColor:'hsl(360,100%,50%)',
    borderRadius:5,
  },
  btnText:{
    fontSize:22,
    color:'hsl(0,50%,100%)'
  }
})