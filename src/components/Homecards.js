import React from 'react';
import { View , Text, Image} from 'react-native';

export default function Homecards() {
  return (
   <View>
        <Image
            source={require("../assets/images/Rectangle 35.png")}
            alt='Glass'
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
   </View>
  );
}
