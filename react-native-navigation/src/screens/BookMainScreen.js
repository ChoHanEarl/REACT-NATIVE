import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'

// ios는 SafeAreaView를 주고 marginTop속성 제거(실제 폰에서 노즐에 가림현상 방지)
// 안드로이드는 확인해보니 SafeAreaView가 안먹음
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`

const BookMainScreen = ({navigation}) => {
    return(
        <Container>
            <StyledText>BookMain</StyledText>
            <Button 
                title="도서목록보기"
                onPress={() => navigation.navigate('BookListScreen')}
            />
        </Container>
    )
}
export default BookMainScreen