import React, { useState, useEffect, useRef } from 'react'
import { Text, TextInput } from 'react-native'
import styled from 'styled-components'

const StyledTextInput = styled.TextInput.attrs({
   autoCapitalize: 'none',
   autoCorrect: false 
})`
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 20px;
`

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const refName = useRef(null)
    const refEmail = useRef(null)

    useEffect(() => {
        console.log(`\n==============Form Component Mount=================\n`)
        console.log(refName)
        refName.current.focus()
        //clean up 함수
        //useEffect의 실행 조건이 빈 배열인 경우 컴포넌트가 언마운트 될 때 정리함수를 실행
        return () => console.log(`\n==============Form Component UnMount===============\n`)
    },[])
    return(
        <>
            <StyledText>Name: {name}</StyledText>
            <StyledText>Email: {email}</StyledText>
            <StyledTextInput 
                // value={name}
                ref={refName}
                returnKeyType="next"
                onSubmitEditing={() => refEmail.current.focus()}
                onChangeText={text => setName(text)} 
                placeholder="name" 
            />
            <StyledTextInput 
                // value={email}
                ref={refEmail}
                returnKeyType="done"
                onChangeText={text => setEmail(text)} 
                placeholder="email" 
            />
        </>
    )
}

export default Form
