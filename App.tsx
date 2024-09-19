import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';

const DecimalToOthers = () => {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [octal, setOctal] = useState('');

  const convert = () => {
    const dec = parseInt(decimal, 10);
    if (!isNaN(dec)) {
      setBinary(dec.toString(2));
      setHexadecimal(dec.toString(16).toUpperCase());
      setOctal(dec.toString(8));
    } else {
      setBinary('');
      setHexadecimal('');
      setOctal('');
    }
  };

  return (
    <View style={styles.tabContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Decimal Number"
        keyboardType="numeric"
        value={decimal}
        onChangeText={setDecimal}
      />
      <Button title="Convert" onPress={convert} />
      <Text style={styles.resultText}>Binary: {binary}</Text>
      <Text style={styles.resultText}>Hexadecimal: {hexadecimal}</Text>
      <Text style={styles.resultText}>Octal: {octal}</Text>
    </View>
  );
};

const BinaryToOthers = () => {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [octal, setOctal] = useState('');

  const convert = () => {
    const bin = parseInt(binary, 2);
    if (!isNaN(bin)) {
      setDecimal(bin.toString(10));
      setHexadecimal(bin.toString(16).toUpperCase());
      setOctal(bin.toString(8));
    } else {
      setDecimal('');
      setHexadecimal('');
      setOctal('');
    }
  };

  return (
    <View style={styles.tabContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Binary Number"
        keyboardType="numeric"
        value={binary}
        onChangeText={setBinary}
      />
      <Button title="Convert" onPress={convert} />
      <Text style={styles.resultText}>Decimal: {decimal}</Text>
      <Text style={styles.resultText}>Hexadecimal: {hexadecimal}</Text>
      <Text style={styles.resultText}>Octal: {octal}</Text>
    </View>
  );
};

const HexadecimalToOthers = () => {
  const [hexadecimal, setHexadecimal] = useState('');
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [octal, setOctal] = useState('');

  const convert = () => {
    const hex = parseInt(hexadecimal, 16);
    if (!isNaN(hex)) {
      setDecimal(hex.toString(10));
      setBinary(hex.toString(2));
      setOctal(hex.toString(8));
    } else {
      setDecimal('');
      setBinary('');
      setOctal('');
    }
  };

  return (
    <View style={styles.tabContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Hexadecimal Number"
        value={hexadecimal}
        onChangeText={setHexadecimal}
      />
      <Button title="Convert" onPress={convert} />
      <Text style={styles.resultText}>Decimal: {decimal}</Text>
      <Text style={styles.resultText}>Binary: {binary}</Text>
      <Text style={styles.resultText}>Octal: {octal}</Text>
    </View>
  );
};

const OctalToOthers = () => {
  const [octal, setOctal] = useState('');
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const convert = () => {
    const oct = parseInt(octal, 8);
    if (!isNaN(oct)) {
      setDecimal(oct.toString(10));
      setBinary(oct.toString(2));
      setHexadecimal(oct.toString(16).toUpperCase());
    } else {
      setDecimal('');
      setBinary('');
      setHexadecimal('');
    }
  };

  return (
    <View style={styles.tabContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Octal Number"
        keyboardType="numeric"
        value={octal}
        onChangeText={setOctal}
      />
      <Button title="Convert" onPress={convert} />
      <Text style={styles.resultText}>Decimal: {decimal}</Text>
      <Text style={styles.resultText}>Binary: {binary}</Text>
      <Text style={styles.resultText}>Hexadecimal: {hexadecimal}</Text>
    </View>
  );
};

const renderScene = SceneMap({
  decimal: DecimalToOthers,
  binary: BinaryToOthers,
  hexadecimal: HexadecimalToOthers,
  octal: OctalToOthers,
});

const App = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'decimal', title: 'Decimal' },
    { key: 'binary', title: 'Binary' },
    { key: 'hexadecimal', title: 'Hexa' },
    { key: 'octal', title: 'Octal' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'blue' }}
            style={{ backgroundColor: 'white' }}
            renderLabel={({ route, focused }) => (
              <Text key={route.key} style={{ color: focused ? 'blue' : 'black' }}>{route.title}</Text>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default App;
