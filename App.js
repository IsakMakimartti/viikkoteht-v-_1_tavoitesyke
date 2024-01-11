import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [age, setAge] = useState('')
  const [hrLimitLower, setHrLimitLower] = useState(0)
  const [hrLimitHigher, setHrLimitHigher] = useState(0)

  /*function calculate() {
    const result = euros * 0.86
    setPounds(result)
  }*/

  const calculate = () => {
    const resultLower = Math.round((220 - age) * 0.65)
    const resultHigher = Math.round((220 - age) * 0.85)
    setHrLimitLower(resultLower)
    setHrLimitHigher(resultHigher)
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        keyboardType='decimal-pad'
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{hrLimitLower + ' - ' + hrLimitHigher}</Text>
      <Button
        title="Calculate"
        onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  field: {
    marginBottom: 8
  }
});
