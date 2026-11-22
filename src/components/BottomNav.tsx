import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';
import { YELLOW } from '../constants/theme';

const navigationItems = [
  ['home', 'Main'],
  ['map', 'Map'],
  ['explore', 'Explore'],
  ['agenda', 'Agenda'],
  ['profile', 'Profile'],
] as const;

export default function BottomNav({ active = 'map' }: { active?: string }) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return <View style={styles.nav}>
    <Image source={require('../../assets/icons/navigation-bar.png')} style={styles.background} resizeMode="stretch" />
    <View style={styles.touchLayer}>{navigationItems.map(([key, screen]) => (
      <Pressable key={key} style={styles.item} onPress={() => navigation.navigate(screen)} accessibilityLabel={key} />
    ))}</View>
  </View>;
}

const styles = StyleSheet.create({
  nav: { height: 58, backgroundColor: YELLOW, flexDirection: 'row', alignItems: 'center', direction: 'ltr' },
  background: { position: 'absolute', width: '100%', height: '100%' },
  touchLayer: { flex: 1, flexDirection: 'row', height: '100%' },
  item: { flex: 1, height: '100%' },
});
