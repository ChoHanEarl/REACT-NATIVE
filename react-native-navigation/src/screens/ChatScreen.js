import React from 'react'
import { Text, Button } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 30px;
`

//탭 네비게이션에서 사용할 화면 1
export const FriendScreen = () => {
    return(
        <Container>
            <StyledText>친구목록입니다.</StyledText>
        </Container>
    )
}

//스택 네비게이션에서 사용할 화면 1
export const ChatListScreen = ({navigation}) => {
    return(
        <Container>
            <StyledText>Chat List</StyledText>
            <Button title="Go to Chat" onPress={() => navigation.navigate('ChatDetail')}/>
        </Container>
    )
}

//스택 네비게이션에서 사용할 화면 2
export const ChatDetailScreen = ({navigation}) => {
    return(
        <>
            <Text>채팅방 화면입니다.</Text>
        </>
    )
}

//탭 네비게이션에서 사용할 화면 2
export const SettingsScreen = () => {
    return(
        <Container>
            <StyledText>설정화면입니다.</StyledText>
        </Container>
    )
}