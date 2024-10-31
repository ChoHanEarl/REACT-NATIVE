import React, {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { theme } from "./theme"
import { StatusBar, Dimensions } from 'react-native'
import Input from './components/Input'
import IconButton from './components/IconButton'
import { images } from './Image'
import Task from './components/Task'


const Container = styled.SafeAreaView`
    flex: 1
    background-color: ${({ theme }) => theme.background}
    align-items: center
    justify-content: flex-start
`

const Title = styled.Text`
    font-size: 40px
    font-weight: 600
    color: ${({ theme }) => theme.main}
    align-self: flex-start
    margin: 20px
`

const List = styled.ScrollView`
    flex: 1 
    width: ${({width}) => width - 40}px
`

export default function App(){
    const[newTask, setNewTask] = useState('')
    const[Tasks, setTasks] = useState([
        {id:'1', text:'Hanbit', completed:false},
        {id:'2', text:'Study', completed:true},
        {id:'3', text:'Sleep', completed:false},
        {id:'4', text:'Game', completed:false},
    ])

    const width = Dimensions.get('window').width

    const _handleTextChange = text => {
        setNewTask(text)
    }

    const _addTask = () => {
        alert(`Add: ${newTask}`)
        setNewTask('')
    }

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <Title>TODO List</Title>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />
                <Input 
                    placeholder="+Add Task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                />
                <List width={width}>
                    {Tasks.reverse().map(item =>
                        <Task key={item.id} text={item.text} />
                    )}
                </List>
                {/* <IconButton type={images.uncomplete} />
                <IconButton type={images.completed} />
                <IconButton type={images.delete} />
                <IconButton type={images.update} /> */}
            </Container>
        </ThemeProvider>
    )
}