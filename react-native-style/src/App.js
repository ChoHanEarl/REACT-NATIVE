import React, { useState } from 'react'
import { Text, View, ScrollView, Switch } from 'react-native'
import { textStyles, viewStyles } from './styles'
import { Header, Contents, Footer } from './components/Layout'
import FlexDirectionTest from './components/FlexDirectionTest'
import JustifyContentTest from './components/JustifyContentTest'
import AlignItemsTest from './components/AlignItemsTest'
import ShadowBox from './components/ShadowBox'
import { StyledComponent } from './components/StyledComponent'
import Button from './components/Button'
import styled, { ThemeProvider } from 'styled-components'
import Signup from './components/Signup'
import Input from './components/input'
import { theme, lightTheme, darkTheme } from './theme'

// export default function App(){
//     return(
//         <View style={viewStyles.container}>
//             {/* 인라인과 클래스 스타일 혼용사용 가능 */}
//             {/* 뒤에 오는 스타일이 앞의 스타일을 덮어쓴다. */}
//             <Text style={[textStyles.text,{color:'green'}]}>
//                 Inline-Styling-Text
//             </Text>
//             <Text style={[textStyles.text, textStyles.error]}>
//                 Inline-Styling-Error
//             </Text>
//         </View>
//     )
// }

const Container = styled.View`
    flex: 1
    background-color: ${props => props.theme.background}
    align-items: center
    justify-content: center
`

export default function App(){
    const [isDark, setIsDark] = useState(false)
    const _toggleSwitch = () => setIsDark(!isDark)
    return(
        // <ScrollView>
        //     <View style={viewStyles.container}>
        //         <Header />
        //         <Contents />
        //         <Footer />
        //         <FlexDirectionTest />
        //         <JustifyContentTest />
        //         <AlignItemsTest />
        //         <ShadowBox />
        //         <StyledComponent />
        //     </View>
        //     <Container>
        //         <Button title="Hanbit"/>
        //         <Button title="React Native"/>
        //     </Container>
        // </ScrollView>
        // <View>
        //     {/* <Signup /> */}
        // </View>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <Button title="Hanbit" />
                <Button title="React Native" />
                <Input borderColor="#3498db"/>
                <Input borderColor="#9b59b6"/>
            </Container>
        </ThemeProvider>
    
    )
}