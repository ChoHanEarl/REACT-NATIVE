import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { textStyles, viewStyles } from './styles'
import { Header, Contents, Footer } from './components/Layout'
import FlexDirectionTest from './components/FlexDirectionTest'
import JustifyContentTest from './components/JustifyContentTest'
import AlignItemsTest from './components/AlignItemsTest'
import ShadowBox from './components/ShadowBox'
import { StyledComponent } from './components/StyledComponent'
import Button from './components/Button'
import styled from 'styled-components'
import Signup from './components/Signup'

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
    background-color: #ffffff
    align-items: center
    justify-content: center
`

export default function App(){
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
        <View>
            <Signup />
        </View>
    )
}