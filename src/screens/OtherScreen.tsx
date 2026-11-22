import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import Placeholder from '../components/Placeholder';
import { DARK, MUTED } from '../constants/theme';

export default function OtherScreen({ title, active }: { title: string; active: string }) {
  return <SafeAreaView style={styles.safe}><StatusBar style="dark" /><AppHeader /><View style={styles.body}><Text style={styles.title}>{title}</Text><Text style={styles.muted}>Conteúdo preparado para receber suas imagens e dados.</Text><Placeholder tone="#D8D8D8" label="Área de conteúdo" large /></View><BottomNav active={active} /></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  body: { flex: 1, padding: 22, gap: 15 },
  title: { fontSize: 26, fontWeight: '700', color: DARK },
  muted: { color: MUTED, marginTop: 3 },
});
