import React, {useContext} from 'react'
import styled from 'styled-components'
import {Text} from 'react-native'
import { Button } from '../components/Index'
import { logout } from '../utils/firebase'
import { UserContext } from '../contexts/User'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.background};
`

const Profile = () => {
    const {dispatch} = useContext(UserContext)

    const _handleLogoutButtonPress = async() => {
        try {
            await logout()
        } catch (error) {
            console.log('[Profile] logout : ', error.message)
        } finally {
            dispatch([])
        }
    }

    return(
        <Container>
            <Button title="logout" onPress={_handleLogoutButtonPress} />
        </Container>
    )
}

export default Profile