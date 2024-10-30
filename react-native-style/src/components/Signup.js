import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default Singup = () => {
    return(
        <View>
            <View style={styles.title}>
                <Text style={styles.titleSize}>회원가입</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.textSize}>이름</Text>
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
    }

})