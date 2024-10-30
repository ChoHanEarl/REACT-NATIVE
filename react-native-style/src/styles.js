import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const textStyles = StyleSheet.create({
    text:{
        padding: 10,
        fontSize: 26,
        fontWeight: '600'
    },
    error:{
        //폰트의 두께. 100 ~ 900까지 문자열로 설정
        fontWeight: '400',
        color: 'orange'
    }
})

export const box_styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        backgroundColor:"#f5f5f5",
    },
    title:{
        fontSize:18,
        marginBottom:20
    },
    boxContainer:{
        width:200,
        height:200,
        backgroundColor:"#ddd",
        alignItems:"center",
        justifyContent:'center',
        marginBottom:20
    },
    box:{
        // width:50,
        // height:50,
        backgroundColor:"#3498db",
        justifyContent:"center",
        alignItems:"center",
        margin:5
    },
    boxText:{
        color:"#fff",
        fontSize:18
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"
    }
})