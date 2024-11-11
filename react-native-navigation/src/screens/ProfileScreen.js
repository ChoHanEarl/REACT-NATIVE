import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ProfileScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9'
    },
    text: {
        fontSize: 24,
        marginBottom: 20
    }
})

export default ProfileScreen