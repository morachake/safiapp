/* eslint-disable prettier/prettier */
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={{
                backgroundColor: "#D9D9D9"
            }}>
                <View style={styles.topcontainer}>
                    <EvilIcons name="user" size={84} color="#FFFF" />
                    <Text style={{ color: "#FFFF", fontFamily: "Medium", fontSize: 25 }}>Moracha</Text>
                </View>
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>

                <View style={{paddingTop:20}}>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                         <Text>Tell Us What you think</Text>
                    </View>
                   
                </View>
            </DrawerContentScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },
    topcontainer :{ 
        backgroundColor: "#388479",
         height: 140,
          alignItems: "center", 
          justifyContent: "space-around"
    }
})