import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Counter from './components/Counter'
import Form from './components/Form'
import Timer from './components/Timer'
import Length from './components/Length'
import Dog from './components/Dog'
import MakeBread from './components/MakeBread'
import ScrollComponent from './components/ScrollComponent'

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`

const App = () => {
    const [isVisible, setIsVisible] = useState(false)
    return(
        <Container>
            {/* {isVisible && <Form />} */}
            {/* 버튼을 누르면 Form 컴포넌트를 보였다가 숨겼다가 하게 만들기 
            버튼의 타이틀은 hide 또는 show로 바꾸기*/}
            {/* <Button title={isVisible ? "Hide" : "SHOW"} onPress={() => setIsVisible(!isVisible)}/> */}
            {/* <Timer /> */}
            {/* <Length /> */}
            {/* <Dog />
            <MakeBread /> */}
            <ScrollComponent />
        </Container>
    )
}

export default App