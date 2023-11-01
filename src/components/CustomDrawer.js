/* eslint-disable prettier/prettier */
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import COLORS from "../constants/Index"
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
                <View style={{ flex: 1, paddingTop: 15 }}>
                    <DrawerItemList {...props} />
                </View>

                <View style={{ paddingTop: 25 }}>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderBottomWidth: 1 }}>
                        <Text style={{ padding: 20, fontFamily: "Medium" }}>Tell Us What you think</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ color: "#FFFF"}}>
                             <Text style={{ padding: 20, fontFamily: "Medium" }}>Help Us imporove</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={styles.bottomcont}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                        <SimpleLineIcons name="logout" size={24} color="black" />
                        <Text style={{fontSize:14, fontFamily: "Bold",marginLeft:8}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9",
    },
    topcontainer: {
        backgroundColor: "#388479",
        height: 140,
        alignItems: "center",
        justifyContent: "space-around"
    },
    bottomcont: {
        flexDirection: "row",
        justifyContent: "flex",
        alignItems: "center",
        marginVertical:2,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        padding: 20,
        borderColor: "#388479",
    }
})