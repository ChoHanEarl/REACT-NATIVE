import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import UserContext2 from '../contexts/UserContext'

const HomeScreen = () => {
    const { user, login, logout } = useContext(UserContext2)

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {user ? (
                <>
                    <Text>Get out {user.name} right now!!</Text>
                    <Button title="Logout" onPress={logout} />
                </>
            ) : (
                <Button title="Login" onPress={login} />
            )}
        </View>
    )
}

export default HomeScreen