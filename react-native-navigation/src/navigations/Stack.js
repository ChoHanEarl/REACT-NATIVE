import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import List from '../screens/List'
import Item from '../screens/Item'
import { Platform } from 'react-native'

//vector-icons
//Expo 프로젝트에서 기본으로 제공하는 라이브러리
//많이 사용되는 아이콘이 있다.
//https://icons.expo.fyi/
import {MaterialCommunityIcons} from '@expo/vector-icons'

//createStacknavigator()함수를 호출해 StackNavigation을 생성
const Stack = createStackNavigator()

//생성된 StackNavigation에는 화면을 구성하는 Screen 컴포넌트와
//Screen 컴포넌트를 관리하는 Navigator 컴포넌트가 있다.
const StackNavigation = () => {
    return(
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                cardStyle: {backgroundColor:'#ffffff'},
                headerStyle: {
                    height: 110,
                    backgroundColor: '#95a5a6',
                    borderBottomWidth: 5,
                    borderBottomColor: '#34495e'
                },
                headerTitleStyle: {color:'#ffffff', fontSize: 24},
                headerTitleAlign: 'center',
                headerTitle: ({style}) => (
                    <MaterialCommunityIcons name="react" style={style} />
                )
            }}
        >
            {/* headerShown: false는 headerMode: 'none'과 동일한 효과를 가진다.  */}
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="List" component={List} options={{
                headerTitle: 'List Screen',
                headerBackTitleVisible: true,
                headerBackTitle: 'Prev', 
                headerTitleStyle: {fontSize: 24},
                headerTintColor: '#e74c3c',
                headerBackImage: ({tintColor}) => {
                    const style = {
                        marginRight: 5,
                        marginLeft: Platform.OS === 'ios' ? 11 : 0
                    }
                    return(
                        <MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={30}
                            color={tintColor}
                            style={style}
                        />
                    )
                }
                }}
            />
            <Stack.Screen name="Detail" component={Item}/>
        </Stack.Navigator>
    )
}

export default StackNavigation