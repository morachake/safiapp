import React from 'react';
import { View , Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Homecards() {
  return (
   <View style={{margin:8}}>
        <Image
            source={require("../assets/images/bottle.png")}
            alt='Glass'
            style={{
              width: 150,
              height: 150,
            }}
          />
   </View>
  );
}
