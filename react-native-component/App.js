import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './src/App';
// import SV from './src/ScrollView';

export default App;
  // const name = 'Gil-Don'
  // return (
    /*
      if문 활용
    <View style={styles.container}>
      <Text style={styles.title}>
        {(() => {
          if(name === 'Hanbit') return 'My name is Hanbit'
          else if(name === 'Gil-Dong') return 'My name is Gil-Dong'
          else return 'My name is React Native'
        })()}
      </Text>
      <StatusBar style="auto" />
    </View>
    */

    // <> ~ </> === <Fragment> ~ </Fragment> (Fragment의 축약 문법)

    // 삼항연산자 활용
    // <View style={styles.container}>
    //   <Text style={styles.title}>
    //     My name is { name === 'Gil-Dong' ? 'Gil-Dong Hong':'React-Native'}
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>

    //AND 연산자
    // <View style={{
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // }}>
    //   {name === 'Gil-Dong' && (
    //     <Text style={styles.title}>My name is Gil-Dong</Text>
    //   )}
    //   {name !== 'Gil-Dong' &&(
    //     <Text style={styles.title}>My name is not Gil-Dong</Text>
    //   )}
    //   <StatusBar style="auto" />
    // </View>

  //   

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 30
//   }
// });
