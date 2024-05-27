import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("Primer número");
  const [num2, setNum2] = useState("Segundo número");
  const [resultado, setResultado] = useState("");
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <Text>Resultado: {resultado}</Text>
      <TextInput
        style={styles.textinput}
        value={num1}
        onChangeText={(txt) => {
          setNum1(txt)
        }}
      />
      <TextInput
      style={styles.textinput}
        value={num2}
        onChangeText={(txt) => {
          setNum2(txt)
        }}
      />
      <Button
        title='Sumar'
        onPress={() => {
          let primerNumero = parseInt(num1);
          let segundoNumero = parseInt(num2);
          let total = primerNumero + segundoNumero;
          setResultado(total);
        }}
      />
      <Button
        title='Restar'
        onPress={() => {
          let primerNumero = parseInt(num1);
          let segundoNumero = parseInt(num2);
          let total = primerNumero - segundoNumero;
          setResultado(total);
        }}
      />
      <Button
        title='Multiplicar'
        onPress={() => {
          let primerNumero = parseInt(num1);
          let segundoNumero = parseInt(num2);
          let total = primerNumero * segundoNumero;
          setResultado(total);
        }}
      />
      <StatusBar style="auto" />
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
  textinput: {
    borderWidth: 1,
    borderColor: "black",
    paddingBottom: 5

  }
});
