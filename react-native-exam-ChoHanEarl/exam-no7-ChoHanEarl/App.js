import React, { useState, useContext, createContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const darkThemeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#333',
    padding: 50,
    borderRadius: 8
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
})

const lightThemeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 8
  },
  text: {
    color: '#000',
    fontSize: 18
  }
})

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const theme = {
    isDarkMode,
    toggleTheme,
    styles: isDarkMode ? darkThemeStyle : lightThemeStyle
  }

  return(
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeComponent = () => {
  const { styles } = useContext(ThemeContext)
  return (
    <View style={[styles.container, styles.box]}>
      <Text style={styles.text}>This is a themed box!</Text>
    </View>
  )
}

const ThemeToggleButton = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext)
  return(
    <Button
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      onPress={toggleTheme}
    />
  )
}
const App = () => {
  return(
    <ThemeProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ThemeComponent />
        <ThemeToggleButton />
      </View>
    </ThemeProvider>
  )
}

export default App
