import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import WriteScreen from "../screens/WriteScreen";
import PostDetail from "../screens/PostDetail";
import { Pressable, View, Text, StyleSheet } from "react-native";
import {AntDesign} from '@expo/vector-icons'

const Stack = createStackNavigator();

const BoardStack = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1e1e1e',
                },
                headerTitleStyle:{
                    color:'white',
                },
                headerTitleAlign:'center',
            }}>
            <Stack.Screen 
                name="Main" 
                component={MainScreen}
                options={{
                    title: '게시글 목록',
                }}
            />
            <Stack.Screen 
                name="Write" 
                component={WriteScreen}
                options={({navigation}) => ({
                    title:'글쓰기',
                    headerLeft:() => (
                        <Pressable onPress={()=> navigation.goBack()} style={{marginLeft:20}}>
                            <AntDesign name="close" size={24} color="white"/>
                        </Pressable>
                    )
                })}
            />
            <Stack.Screen
                name="PostDetail"
                options={{
                    title:"상세보기"
                }}
                component={PostDetail}
            />
        </Stack.Navigator>
    )
}

export default BoardStack;
