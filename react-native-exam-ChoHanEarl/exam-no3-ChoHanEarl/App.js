import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Counter';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Counter</Text>
        <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
