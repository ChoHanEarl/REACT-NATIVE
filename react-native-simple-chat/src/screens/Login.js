import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
// import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Image, Input, Button } from '../components/Index'
import { images } from '../utils/Images'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { removeWhitespace, validateEmail } from '../utils/common'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Alert } from 'react-native'
import { login } from '../utils/firebase'
import { ProgressContext, UserContext } from '../contexts/Index'

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.background};
    padding: 0 20px;
    padding-top: ${({insets:{top}})=> top}px;
    padding-bottom: ${({insets:{bottom}}) => bottom}px;
`

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({theme}) => theme.errorText}
`

const Login = ({navigation}) => {

    const {spinner} = useContext(ProgressContext)
    const {dispatch} = useContext(UserContext)

    //useSafeAreaInsets()
    //화면의 안전 영역을 고려해 레이아웃을 조정할 때 사용하는 Hook
    //iOS장치의 상단 노치나 하단 홈버튼 영역과 같은 안전 구역을 감안해 레이아웃을 맞추기 위해 사용한다.
    //hook은 { top, bottom, left, right} 형태의 객체를 반환한다.
    //안전 영역의 높이나 너비를 픽셀 단위로 제공
    const insets = useSafeAreaInsets()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    //Password를 입력하는 Input을 조종하기 위한 useRef
    //useRef: DOM객체(컴포넌트)를 조종
    const passwordRef = useRef()
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        //이메일을 입력하고, 비밀번호를 입력하고,
        //조건맞게 입력했을 때 false로 바꾼다.
        setDisabled(!(email && password && !errorMessage))
        //email, password, errorMessage의 값이 바뀔 때마다 useEffect를 실행
    }, [email, password, errorMessage])

    const _handleEmailChange = email => {
        const changedEmail = removeWhitespace(email)
        setEmail(changedEmail)
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'please verify your email.'
        )
    }

    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password))
    }

    //Button 컴포넌트에 전달할 함수
    const _handleLoginButtonPress = async () => {
        try {
            spinner.start()
            const user = await login({email, password})
            dispatch(user)
            Alert.alert('Login Success', user.email)
        } catch (error) {
            Alert.alert('Login Error', error.message)
        } finally{
            spinner.stop()
        }
    }

    return(
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        // KeyboardAwareScrollView : 다른 공간을 누르면 키보드가 사라지고, iOS로 봤을 때 비밀번호를 입력하는 Input이 키보드에 가리는 현상을 막아준다. 
        <KeyboardAwareScrollView
            contentContainerStyle={{flex: 1}}
            extraScrollHeight={20}
        >
            <Container insets={insets}>
                {/* url과 style을 props로 전달 */}
                <Image url={images.logo} imageStyle={{borderRadius: 8}} />
                {/* <Text style={{fontSize: 30}}>Login Screen</Text> */}
                {/* <Button title="Signup" onPress={() => navigation.navigate('Signup')} /> */}
                {/* Email을 입력하는 Input */}
                <Input
                    label="Email"
                    value={email}
                    onChangeText={_handleEmailChange}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef} //useRef설정
                    label="Password"
                    value={password}
                    isPassword={true} //input에서 secureTextEntry를 isPassword로 정의하기로 했음. 사용하기 위해 true로 지정
                    onChangeText={_handlePasswordChange}
                    onSubmitEditing={_handleLoginButtonPress}
                    placeholder="Password"
                    returnKeyType="done"
                />
                <ErrorText>{errorMessage}</ErrorText>
                {/* 로그인 버튼 */}
                <Button 
                    title="Login" 
                    onPress={_handleLoginButtonPress} 
                    disabled={disabled} //여기서의 disabled는 props 
                />
                {/* 회원가입버튼 */}
                <Button 
                    title="Signup with email" 
                    onPress={() => navigation.navigate('Signup')} 
                    isFilled={false}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Login