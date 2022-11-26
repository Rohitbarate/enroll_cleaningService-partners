import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import ServiceTag from "./ServiceTag";

const ServicesForm = ({ navigation }) => {
  const { height, width } = Dimensions.get("screen");
  const [serName, setSerName] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [serNames, setSerNames] = useState([]);

  const addService = (name) => {
    setSerNames((prevNames) => [...prevNames, name]);
    setSerName("");
  };

  useEffect(() => {
    isAvlbl(serName)
  }, [serNames]);

  const isAvlbl = (serName) => {
    const isAvl = serNames.find((ser) => {
      return serName === ser;
    });
    isAvl || serName == '' || serName == ' ' ? setIsAvailable(true) : setIsAvailable(false);
  };

  const delService = (service)=>{
    const newSerArr = serNames.filter(ser =>{
        return service !== ser
      })
      setSerNames(newSerArr)
  }

  return (
    <KeyboardAvoidingView style={[styles.container, { width: width }]}>
      <Text style={{ fontSize: 22, textAlign: "center", fontWeight: "600" }}>
        Add Your Services
      </Text>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputRow}>
          <Text style={styles.label}>Service Name :</Text>
          <TextInput
            placeholderTextColor="hsl(100,0%,65%)"
            style={styles.input}
            value={serName}
            placeholder="Normal Wash"
            autoCapitalize="sentences"
            onChangeText={(text) => {
              setSerName(text), isAvlbl(text);
            }}
          />
          <TouchableOpacity
            disabled={isAvailable ? true : false}
            style={[
              styles.btn,
              {
                marginTop: 10,
                backgroundColor: isAvailable
                  ? "hsl(100,0%,40%)"
                  : "hsl(360,100%,50%)",
              },
            ]}
            onPress={() => addService(serName)}
          >
            <Text
              style={[
                styles.btnText,
                { textAlign: "center", paddingVertical: 5 },
              ]}
            >
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView}>
          {serNames == "" ? (
            <Text style={{ fontSize: 18, color: "red",textAlign:'center',flex:1 }}>
              Please add atleast one service 
            </Text>
          ) : (
            serNames.map((service) => {
              return (
                <TouchableOpacity
                onPress={()=>delService(service)}
                >
                  <ServiceTag service={service} />
                </TouchableOpacity>
              );
            })
          )}
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ServicesForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 16,
    alignItems: "stretch",
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
    marginVertical: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  inputRow: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    color: "hsl(100,0%,30%)",
  },
  input: {
    height: 50,
    marginTop: 5,
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 20,
    color: "hsl(100,0%,0%)",
    letterSpacing: 1,
  },
  listView: {
    borderWidth: 1,
    minHeight: 300,
    height: 400,
    borderRadius: 5,
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignContent: "flex-start",
    flexDirection: "row",
    padding: 5,
  },
  btnView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "hsl(360,100%,50%)",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 22,
    color: "hsl(0,50%,100%)",
  },
});
