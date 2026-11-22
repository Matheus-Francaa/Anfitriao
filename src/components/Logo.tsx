import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return <Image source={require('../../assets/images/logo-anfitriao.png')} style={styles.logo} resizeMode="contain" />;
}

const styles = StyleSheet.create({
  logo: { width: 58, height: 50 },
});
