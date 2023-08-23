import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={{alignSelf: 'center', justifyContent: 'center', width: '100%',
     height: 400}}>
      <ActivityIndicator size="large" />
    </View>
  )
}