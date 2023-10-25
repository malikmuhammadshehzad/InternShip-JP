import {Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import {styles} from './Style';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  // hooks
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Create a new account </Text>
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
      <Button title="SignUP" />
    </View>
  );
};

export default SignUp;
