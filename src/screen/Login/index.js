import {Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

 
import {useNavigation} from '@react-navigation/native';
import { styles } from './Style';

const Login = () => {
  // hooks
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Welcome back</Text>
      <Text>UserName</Text>
      <TextInput
        style={styles.inputStyle}
        value={userName}
        placeholder="Enter UserName"
        onChangeText={text => setUserName(text)}
      />
      <Text>Password </Text>
      <TextInput
        style={styles.inputStyle}
        value={password}
        placeholder="Enter Your Password"
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.navText}>
        {' '}
        Do have an account{' '}
        <Text onPress={() => navigation.navigate('signUP')} style={styles.text}>
          {' '}
          Create a new account{' '}
        </Text>{' '}
      </Text>

      <Button onPress={()=> navigation.navigate('home')} title="Login" />
    </View>
  );
};

export default Login;
