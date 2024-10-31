import React from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export default Signup = () => {
    return(
        <View>
            <View style={styles.title}>
                <Text style={styles.titleSize}>회원가입</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.textSize}>이름</Text>
                <TextInput style={styles.input} placeholder='이름을 입력해주세요' />
                <Text style={styles.textSize}>이메일</Text>
                <TextInput style={styles.input} placeholder='이메일을 입력해주세요' />
                <Text style={styles.textSize}>비밀번호</Text>
                <TextInput style={styles.input} placeholder='비밀번호를 입력해주세요' secureTextEntry={true}/>
                <Text style={styles.textSize}>비밀번호 확인</Text>
                <TextInput style={styles.input} placeholder='비밀번호를 한번 더 입력해주세요' secureTextEntry={true}/>
            </View>
            <View style={styles.footer}>
                <Button style={styles.button} title="가입하기" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    titleSize:{
        fontSize: 20,
        fontWeight: "600"
    },
    body:{
        marginLeft: 10
    },
    textSize:{
        fontSize: 15,
        fontWeight: "600"
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        width: '90%',
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 10
    },
    footer:{
        width: '50%',
        justifyContent: 'center',
        AlignItems: 'center',
        marginLeft: 80,
        marginTop: 10
    },
    button:{
        justifyContent: 'center',
        AlignItems: 'center',
    }

})