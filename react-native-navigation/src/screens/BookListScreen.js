import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`

const book = [
	{id:'1', title: '홍길동전', description: '이것은 홍길동전의 설명입니다.'},
	{id:'2', title: '심청전', description: '이것은 심청전의 설명입니다.'},
	{id:'3', title: '콩쥐팥쥐', description: '이것은 콩쥐팥쥐의 설명입니다.'},
	{id:'4', title: '나미아 잡화점의 기적', description: '이것은 히가시노 게이고의 소설입니다.'}
]

const BookListScreen = ({navigation}) => {

    const _onPress = (item) => {
        navigation.navigate('BookDetailScreen', {id: item.id, title: item.title, description: item.description})
    }

    return(
        <Container>
            <StyledText>BookList</StyledText>
            {book.map(item => (
                <Button
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    onPress={() => _onPress(item)}
                />
            ))}
        </Container>
    )
}

export default BookListScreen