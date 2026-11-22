import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { YELLOW } from '../constants/theme';

export function PrimaryButton({ title, onPress }: { title: string; onPress: () => void }) {
  return <Pressable style={styles.primary} onPress={onPress}><Text style={styles.primaryText}>{title}</Text></Pressable>;
}

export function SecondaryButton({ title, onPress }: { title: string; onPress: () => void }) {
  return <Pressable style={styles.secondary} onPress={onPress}><Text>{title}</Text></Pressable>;
}

const styles = StyleSheet.create({
  primary: { width: '100%', height: 40, borderRadius: 22, backgroundColor: YELLOW, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  primaryText: { color: '#000', fontWeight: '500' },
  secondary: { width: '100%', height: 30, borderRadius: 18, borderWidth: 1, borderColor: '#AAA', alignItems: 'center', justifyContent: 'center', marginTop: 11 },
});
