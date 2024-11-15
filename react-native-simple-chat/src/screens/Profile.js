import React, { useContext, useState } from 'react'
import styled, {ThemeContext} from 'styled-components'
import {Text} from 'react-native'
import { Button, Image, Input } from '../components/Index'
import { logout, getCurrentUser, updateUserInfo } from '../utils/firebase'
import { UserContext, ProgressContext } from '../contexts/Index'
import { Alert } from 'react-native'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.background};
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`

const Profile = () => {
    const {dispatch} = useContext(UserContext)
    const {spinner} = useContext(ProgressContext)
    const theme = useContext(ThemeContext)

    //현재 로그인한 유저의 정보를 가져온다.
    const user = getCurrentUser()

    //유저의 프로필사진 url을 가져와서 state에 저장
    const [ photoUrl, setPhotoUrl ] = useState(user.photoURL)

    //로그아웃 버튼을 눌렀을 때 실행되는 함수
    const _handleLogoutButtonPress = async() => {
        try {
            spinner.start()
            await logout()
        } catch (error) {
            console.log('[Profile] logout : ', error.message)
        } finally {
            dispatch([])
            spinner.stop()
        }
    }

    //수정한 이미지 업로드
    const _handlePhotoChange = async url => {
        try {
            spinner.start()
            const updatedUser = await updateUserInfo(url)
            setPhotoUrl(updatedUser.photoUrl)
        } catch (error) {
            Alert.alert('Photo Error', error.message)
        } finally {
            spinner.stop()
        }
    }

    return(
        <Container>
            <Image
                url={photoUrl}
                onChangeImage={_handlePhotoChange}
                showButton
                rounded
            />
            <Input label="Name" value={user.displayName} disabled/>
            <Input label="Email" value={user.email} disabled/>
            <Button 
                title="logout" 
                onPress={_handleLogoutButtonPress} 
                containerStyle={{ marginTop: 30, backgroundColor: theme.buttonLogout }} 
            />
        </Container>
    )
}

export default Profile

// import {initializeApp} from 'firebase/app'
// import { 
//     getAuth,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     updateProfile,
//     signOut } from 'firebase/auth';
// import { getStorage,uploadBytes,ref, getDownloadURL } from 'firebase/storage';
// import config from '../../firebase.json'

// //initializeApp()메서드
// //firebase는 전달된 설정을 기반으로 객체를 생성한다.
// //이후 app을 통해서 firebase의 인증, 데이터베이스, 스토리지등의 서비스를 이용할 것이다.
// const app = initializeApp(config);

// const auth = getAuth(app);

// const uploadImage = async uri => {
//     //만약 URI가 이미 HTTPS로 시작하는 웹 URL이면, 업로드하지않고 그대로 변환
//     if(uri.startsWith("https")){
//         return URL;
//     }
//     //로컬파일 URI인 경우, fetch를 통해 이미지 데이터를 불러오고 blob형태로 변환
//     const response = await fetch(uri);
//     const blob = await response.blob();
//     //현재 로그인된 사용자의 ID(uid)를 가져온다.
//     const {uid} = auth.currentUser;
//     //Firebase의 Storage인스턴스를 가져오고, 저장할 파일의 참조를 생성
//     const storage = getStorage(app);
//     //지정한 참조에 blob데이터를 image/png 형식으로 업로드
//     const storageRef = ref(storage, `/profile/${uid}/photo.png`);
//     await uploadBytes(storageRef,blob, {
//         contentType:"image/png"
//     })
//     //업로드된 파일의 다운로드URL을 가져와 반환
//     return await getDownloadURL(storageRef)
// }

// //signInWithEmailAndPassword
// //이메일과 비밀번호를 이용해 인증받는 함수
// export const login = async({email, password}) => {
//     const {user} = await signInWithEmailAndPassword(auth,email, password);
//     return user;
// }

// //회원가입 함수
// export const signup = async ({name,email,password,photoUrl}) => {
//     //이메일과 비밀번호로 사용자 추가
//     const {user} = await createUserWithEmailAndPassword(auth,email,password)
//     //주어진 photoUrl을 uri을 반환하여 저장
//     const PhotoUrl = await uploadImage(photoUrl);
//     //Firebase의 스토리지에 업로드
//     await updateProfile(auth.currentUser, {displayName:name,photoURL:PhotoUrl});
//     return user;
// }
// //로그아웃
// export const logout = async () => {
//     await signOut();
//     return{};
// }
// //현재 로그인한 유저의 정보를 불러오는 함수
// export const getCurrentUser = () => {
//     const {uid,displayName,email,photoURL} = auth.currentUser;
//     return {uid,displayName,email,photoURL}
// }
// //다른 사진을 업로드할 수 있게 수정해주는 함수
// //auth.currentUser -> 현재 로그인한 user의 정보
// export const updateUserInfo = async photo => {
//     const photoUrl = await uploadImage(photo);
//     await updateProfile(auth.currentUser,{photoURL:{photoUrl}})
//     return photoUrl;
// }