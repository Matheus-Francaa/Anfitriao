import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

export default function Placeholder({ tone = '#263038', label = 'Imagem do evento', large = false, image }: { tone?: string; label?: string; large?: boolean; image?: ImageSourcePropType }) {
  return (
    <View style={[styles.placeholder, { backgroundColor: tone }, large && styles.large]}>
      {image ? <Image source={image} style={styles.image} resizeMode="cover" /> : <><Text style={styles.text}>IMAGEM</Text><Text style={styles.label}>{label}</Text></>}
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { width: 120, height: 120, borderRadius: 18, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  large: { width: '100%', height: 200, borderRadius: 12 },
  text: { color: 'rgba(255,255,255,.55)', fontSize: 11, fontWeight: '800', letterSpacing: 2 },
  label: { color: '#FFF', marginTop: 5, fontSize: 12, textAlign: 'center' },
  image: { width: '100%', height: '100%' },
});
