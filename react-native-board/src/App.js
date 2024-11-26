import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BoardStack from './navigation/BoardStack'
import { BoardContext } from './context/BoardContext'

const App = () => {
    const [ boardList, setBoardList ] = useState([])
    return(
        <NavigationContainer>
            <BoardContext.Provider value={{boardList, setBoardList}}>
                <BoardStack />
            </BoardContext.Provider>
        </NavigationContainer>
    )
}

export default App