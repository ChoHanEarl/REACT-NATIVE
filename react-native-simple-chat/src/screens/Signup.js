import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import { Image, Input, Button } from '../components/Index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { validateEmail, removeWhitespace } from '../utils/common'
import { images } from '../utils/Images'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.background};
    padding: 0 20px;
    color: ${({theme}) => theme.errorText};
`

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({theme}) => theme.errorText}
`

const Signup = () => {
    const[name, setName] = useState('') // 이름을 관리하는 state
    const[email, setEmail] = useState('') // 아이디(email)을 관리하는 state
    const[password, setPassword] = useState('') // 비밀번호를 관리하는 state
    const[passwordConfirm, setPasswordConfirm] = useState('') // 비밀번호 일치 여부를 관리하는 state
    const[errorMessage, setErrorMessage] = useState('') // 에러 메시지를 관리하는 state
    const[disabled, setDisabled] = useState(true) // 버튼 활성화 여부를 관리하는 state
    const[photoUrl, setPhotoUrl] = useState(images.photo2)

    //함수 작성
    useEffect(() => {
        if(didMountRef.current){
            let _errMessage = ''
            if(!name) {
                _errMessage = 'Please enter your name.'
            } else if(!validateEmail(email)) {
                _errMessage = 'Please verify your email.'
            } else if(password.length < 6) {
                _errMessage = 'The password must contain 6 characters at least.'
            } else if(password !== passwordConfirm) {
                _errMessage = 'Passwords need to match'
            } else {
                _errMessage = ''
            }
            setErrorMessage(_errMessage)
            ,[name, email, password, passwordConfirm]
        } else {
            didMountRef.current = true
        }
    })

    useEffect(() => {
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        )
    }, [name, email, password, passwordConfirm, errorMessage])

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const didMountRef = useRef()

    const _handleSignupButtonPress =() => {

    }

    return(
        <KeyboardAwareScrollView
            // contentContainerStyle={{flex:1}}
            extraHeight={20}
        >
            <Container>
                <Image 
                    rounded 
                    url={photoUrl} 
                    showButton 
                    onChangeImage={url => setPhotoUrl(url)}
                />
                {/* <Image rounded url={images.photo2}/> */}
                {/* 이름을 작성하는 Input */}
                <Input
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)} //텍스트가 변할 때마다 state에 반영
                    onSubmitEditing={() => { //완료버튼 누를 시 state에 반영, 이메일칸으로 포커스 이동
                        setName(name.trim())
                        emailRef.current.focus()
                    }}
                    onBlur={() => setName(name.trim())} //포커스가 빠져도 이름을 state에 반영
                    placeholder="Name"
                    returnKeyType="next"
                />
                {/* 이메일을 작성하는 Input */}
                <Input
                    ref={emailRef}
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(removeWhitespace(text))}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="email"
                    returnKeyType="next"
                />
                {/* 비밀번호를 작성하는 Input */}
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(removeWhitespace(text))}
                    onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder="password"
                    returnKeyType="done"
                    isPassword={true}
                />
                {/* 비밀번호 재확인 Input */}
                <Input
                    ref={passwordConfirmRef}
                    label="Password Confirm"
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
                    onSubmitEditing={_handleSignupButtonPress}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword={true}
                />

                <ErrorText>{errorMessage}</ErrorText>

                <Button
                    title="Signup"
                    onPress={_handleSignupButtonPress}
                    disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Signup