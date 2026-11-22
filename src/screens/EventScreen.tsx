import React from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import Placeholder from '../components/Placeholder';
import { PrimaryButton } from '../components/Buttons';
import { DARK, MUTED, images } from '../constants/theme';

export default function EventScreen({ route }: NativeStackScreenProps<RootStackParamList, 'Event'>) {
  const image = route.params.title === 'Na praia' ? images.naPraia : route.params.title === 'Bar do Chitão' ? images.barDoChitao : route.params.title === 'NewMercadito' ? images.newMercadito : images.casaDoCantador;
  return <SafeAreaView style={styles.safe}><StatusBar style="dark" /><AppHeader /><ScrollView><Placeholder image={image} label={route.params.title} large /><View style={styles.body}><Text style={styles.title}>{route.params.title}</Text><Text style={styles.muted}>00:00-00:00</Text><Text style={styles.description}>Viva a magia da música e descubra experiências incríveis. Encontre pessoas, lugares e momentos para guardar.</Text><PrimaryButton title="Adicionar à agenda" onPress={() => Alert.alert('Agenda', 'Evento adicionado!')} /><Text style={styles.section}>Quem Vai</Text><View style={styles.people}>{['Brenda', 'Guilherme', 'Kelven', 'Clara', 'Santana'].map((person) => <View key={person} style={styles.person}><View style={styles.avatar} /><Text>{person}</Text></View>)}</View></View></ScrollView><BottomNav /></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  body: { padding: 15 },
  title: { fontSize: 22, fontWeight: '700', color: DARK },
  muted: { color: MUTED, marginTop: 3 },
  description: { color: MUTED, fontSize: 15, lineHeight: 20, marginVertical: 12 },
  section: { fontSize: 23, fontWeight: '700', marginVertical: 8, color: DARK },
  people: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  person: { alignItems: 'center', gap: 4 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#B6C5C3' },
});
