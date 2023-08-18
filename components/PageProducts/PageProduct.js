import React from 'react';
import { View, ScrollView, Text } from 'react-native';

// import { Container } from './styles';

export default function PageProducts({route, navigation}) {
  const { data } = route.params

  return (
    <ScrollView>
      <View>
        <Text>{data.name}</Text>
      </View>
    </ScrollView>
  )
}