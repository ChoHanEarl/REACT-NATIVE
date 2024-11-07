import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import BookMainScreen from '../screens/BookMainScreen'
import BookListScreen from '../screens/BookListScreen'
import BookDetailScreen from '../screens/BookDetailScreen'
import { Platform } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

//1. 스택을 만든다.
const Stack = createStackNavigator()

//생성된 StackNavigation에는 화면을 구성하는 Screen 컴포넌트와
//Screen 컴포넌트를 관리하는 Navigator 컴포넌트가 있다.
const StackNavigation = () => {
    return(
        //2. 화면을 담기 위한 Navigator를 만든다.
        <Stack.Navigator 
            initialRouteName='도서 목록 보기'
            screenOptions={{
                // cardStyle: 모든 배경색
                // headerStyle: 헤더의 스타일
                // headerTitleStyle: 헤더 제목 스타일
                // headerTitleAlign: ios는 center로, ios는 left로
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
            <Stack.Screen name="도서 목록 보기" component={BookMainScreen}/>
            <Stack.Screen name="BookListScreen" component={BookListScreen} options={{
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
            <Stack.Screen name="BookDetailScreen" component={BookDetailScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigation