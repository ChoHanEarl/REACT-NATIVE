//Toggle Text 버튼 누를 때마다
//<p>This text can be toggled</p>
//보였다 안보였다 하게 만들기

import React, { useState } from "react"
import { View, Text } from "react-native"
import MyButton from "./MyComponent"

const ToggleText = () => {
    const[toggle, setToggle] = useState(true)

    return(
        <View style={{ align:"center" }}>
            <MyButton title="Toggle Text" onPress={() => setToggle(!toggle)} />
                {toggle &&(<Text>This can be ToggleText</Text>)}
        </View>
    )
}

export default ToggleText