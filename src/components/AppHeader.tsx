import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Logo';
import { YELLOW } from '../constants/theme';

export default function AppHeader() {
  return <View style={styles.header}><Logo /></View>;
}

const styles = StyleSheet.create({
  header: { height: 74, backgroundColor: YELLOW, alignItems: 'center', justifyContent: 'center' },
});
