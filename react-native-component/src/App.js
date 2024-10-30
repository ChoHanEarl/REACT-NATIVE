import React, {useState} from "react";
import { View, Text, Button } from "react-native"
import MyButton from "./components/MyComponent";
import Counter from "./components/Counter";
import Total from "./components/Total";
import ToggleText from "./components/Toggle";
import ItemList from "./components/ItemList";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";
import PressButton from "./components/PressAbleTest";

const App = () => {
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10])
    const [fruits, setFruits] = useState(['사과','바나나','포도'])

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* <Text style={{fontSize: 30, marginBottom: 10}}>Button Component</Text> */}
            {/* <Button title="button" onPress={() => alert('Click !!!')} />
            <MyButton title="button" onPress={() => alert('prop')} /> */}
            {/* 부모 컴포넌트에서 자식 컴포넌트를 사용하면서
            속성으로 props를 전달하는 방법 외에, 컴포넌트 사이에서
            값을 입력해서 전달하는 방법도 있다. */}
            {/* <MyButton title="button" onPress={()=> alert('children')}>Children Props</MyButton>
            <MyButton onPress={() => alert('default')}/> */}
            {/* <Counter/> */}
            {/* <ToggleText /> */}
            {/* <Total arr={arr}/> */}
            {/* <ItemList item={fruits} /> */}
            {/* <EventButton /> */}
            {/* <EventInput /> */}
            <PressButton title="Pressable"/>
        </View>
    )
}
export default App