import React, {useLayoutEffect} from 'react'
import styled from 'styled-components'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 20px;
    margin-bottom: 10px;
`
const BookDetailScreen = ({navigation, route}) => {
    //useLayoutEffect()
    //useEffect와 사용법이 동일하며 거의 같은 방식으로 동작한다.
    //차이점은 컴포넌트가 업데이트된 직후 화면이 렌더링되기 전에 실행된다는 점이다.
    //이 특징 때문에 화면을 렌더링하기 전에 변경할 부분이 있거나 
    //수치 등을 측정해야 하는 경우 많이 사용한다.
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerTintColor: '#ffffff',
            headerLeft: ({onPress, tintColor}) => {
                return(
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={30}
                        style={{marginLeft: 11}}
                        color={tintColor}
                        onPress={onPress}
                    />
                )
            },
            headerRight: ({tintColor}) => {
                return(
                    <MaterialCommunityIcons
                        name="home-variant"
                        size={30}
                        style={{marginRight: 11}}
                        color={tintColor}
                        onPress={() => navigation.popToTop()}
                        // popToTop: 첫 화면으로 돌아가는 메서드
                    />
                )
            }
        })
    }, [])
    return(
        <Container>
            <StyledText>BookDetail</StyledText>
            <StyledText>ID : {route.params.id}</StyledText>
            <StyledText>Name : {route.params.title}</StyledText>
            <StyledText>Detail: {route.params.description}</StyledText>
        </Container>
    )
}

export default BookDetailScreen