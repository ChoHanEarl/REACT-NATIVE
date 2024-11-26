import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import axios from 'axios'

const PostDetail = ({route}) => {
    //읽어온 게시물을 저장할 state
    const [ post, setPost ] = useState({})
    const {id} = route.params
    
    useEffect(() => {
        const getBoardDetail = async() => {
            try{
                axios.get(`http://10.0.2.2:9090/api/board/get/${id}`)
                setPost(response.data.data[0])
            } catch(error){
                console.error('Error fetching data', error)
            }
        }
        getBoardDetail()
    },[])

    return(
        <View style={styles.container}>
            {/* 제목 */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {post.title}
                </Text>
            </View>
            {/* 작성자, 작성시간 */}
            <View style={styles.authorContainer}>
                <Text style={styles.authorText}>
                    {post.author}
                </Text>
                <Text style={styles.timeText}>
                    {post.writingTime}
                </Text>
            </View>
            {/* 내용 */}
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>
                    {post.content}
                </Text>
            </View>
            {/* 버튼 */}
            <View style={styles.buttonContainer}>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>수정</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>삭제</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#1e1e1e',
        padding: 20
    },
    titleContainer: {
        width: '100%',
        marginBottom: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#444'
    },
    titleText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '#444'
    },
    authorContainer: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    authorText:{
        fontSize: 16,
        color: '#ccc'
    },
    timeText: {
        fontSize: 16,
        color: '#888'
    },
    contentContainer: {
        backgroundColor: '#2b2b2b',
        width: '100%',
        padding: 15,
        borderRadius: 10
    },
    contentText: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 24
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#2ecc71',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        margin: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
})
export default PostDetail