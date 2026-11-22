import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';
import Placeholder from '../components/Placeholder';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { YELLOW, DARK, images } from '../constants/theme';

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return <SafeAreaView style={styles.safe}><StatusBar style="dark" /><View style={styles.yellow}><View style={styles.wave} /></View><View style={styles.content}><Placeholder image={images.chico} label="Chico viajante" /><Text style={styles.title}>Oi, eu sou o Chico, bom te ver por aqui!</Text><Text style={styles.subtitle}>Vamos nessa?</Text><PrimaryButton title="Criar Conta" onPress={() => navigation.navigate('Auth', { mode: 'signup' })} /><SecondaryButton title="Entrar" onPress={() => navigation.navigate('Auth', { mode: 'login' })} /></View></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  yellow: { height: 150, backgroundColor: YELLOW, overflow: 'hidden' },
  wave: { position: 'absolute', width: '120%', height: 90, bottom: -48, left: '-10%', backgroundColor: '#FFF', borderRadius: 100 },
  content: { flex: 1, alignItems: 'center', paddingHorizontal: 30, paddingTop: 26 },
  title: { marginTop: 20, fontSize: 14, fontWeight: '600', color: DARK, textAlign: 'center' },
  subtitle: { fontSize: 12, marginTop: 3 },
});
