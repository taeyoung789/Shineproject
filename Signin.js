// Signin.js
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

// Signin 컴포넌트 정의
const Signin = ({ navigation }) => {
  // 폼 제출 핸들러 함수
  const handleSubmit = () => {
    // React Native에서의 폼 제출 처리
    console.log('Form submitted!');
  };

  // 컴포넌트 반환
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Applogin')}>
        <Text style={styles.forgotPassword}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 12,
  },
  signUpLink: {
    marginTop: 16,
    color: 'green',
  },
});

// Signin 컴포넌트를 외부에서 사용할 수 있도록 내보냄
export default Signin;
