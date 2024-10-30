import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"

// const Total = (props) => {

//     let arr = props.arr

//     let total = arr.reduce((total, num)=>{
//         return total+num}
//     ,0)
//     console.log(arr)

//     return(
//         <View>
//             <Text>sum:{total}</Text>
//         </View>
//     )
// }

// export default Total

export default Total = ({arr}) => {
    const [sum, setSum] = useState(0)

    useEffect(()=>{
        let total = arr.reduce((total,num)=>total+num,0)
        setSum(total)
    },[arr])

    return(
        <View>
            <Text>sum:{sum}</Text>
        </View>
    )
}