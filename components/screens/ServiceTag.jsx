import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceTag = ({service }) => {
  return (
    <Text key={service} style={styles.serText}>
      {service}
    </Text>
  );
};

export default ServiceTag;

const styles = StyleSheet.create({
    
  serText: {
    borderRadius: 1,
    backgroundColor: "hsl(100,0%,80%)",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "600",
    fontSize: 15,
    letterSpacing: 1,
    margin: 5,
    color:'hsl(1,0%,0%)'
  },
});
