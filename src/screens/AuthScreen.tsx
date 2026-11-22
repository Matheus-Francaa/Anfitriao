import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import Logo from '../components/Logo';
import Placeholder from '../components/Placeholder';
import { PrimaryButton } from '../components/Buttons';
import { YELLOW, images } from '../constants/theme';

export default function AuthScreen({ route }: NativeStackScreenProps<RootStackParamList, 'Auth'>) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return <SafeAreaView style={styles.safe}><StatusBar style="dark" /><View style={styles.yellow}><Logo /></View><KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.body}><Placeholder image={images.chico} label="Chico viajante" /><TextInput value={email} onChangeText={setEmail} placeholder="Insira seu e-mail" placeholderTextColor="#C5C5C5" style={styles.input} keyboardType="email-address" /><TextInput value={password} onChangeText={setPassword} placeholder="Insira sua senha" placeholderTextColor="#C5C5C5" style={styles.input} secureTextEntry /><PrimaryButton title={route.params.mode === 'login' ? 'Entrar' : 'Avançar'} onPress={() => navigation.navigate('Main')} /><View style={styles.or}><View style={styles.line} /><Text>OU</Text><View style={styles.line} /></View><View style={styles.social}><Text style={styles.socialIcon}>f</Text><Text style={styles.socialIcon}>G</Text><Text style={styles.socialIcon}>𝕏</Text></View></KeyboardAvoidingView></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  yellow: { height: 150, backgroundColor: YELLOW, alignItems: 'center', justifyContent: 'center' },
  body: { flex: 1, alignItems: 'center', paddingTop: 22, paddingHorizontal: 57 },
  input: { height: 40, width: '100%', borderWidth: 1, borderColor: YELLOW, borderRadius: 22, textAlign: 'center', marginBottom: 10, paddingHorizontal: 15 },
  or: { flexDirection: 'row', alignItems: 'center', gap: 9, marginVertical: 13 },
  line: { height: 1, backgroundColor: '#555', flex: 1 },
  social: { flexDirection: 'row', gap: 28 },
  socialIcon: { borderWidth: 1, borderColor: YELLOW, color: YELLOW, borderRadius: 30, width: 40, height: 40, textAlign: 'center', paddingTop: 5, fontSize: 25, fontWeight: '700' },
});
