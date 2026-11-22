import React, { useEffect, useState } from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import Placeholder from '../components/Placeholder';
import NameModal from '../components/NameModal';
import { DARK, events, images } from '../constants/theme';

const NAME_PROMPT_KEY = '@anfitriao/name-prompt-confirmed';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let active = true;

    AsyncStorage.getItem(NAME_PROMPT_KEY)
      .then((confirmed) => {
        if (active && confirmed !== 'true') {
          setModalVisible(true);
        }
      })
      .catch(() => {
        if (active) {
          Alert.alert('Não foi possível carregar suas preferências', 'O formulário será exibido nesta sessão.');
          setModalVisible(true);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  async function closeNameModal() {
    try {
      await AsyncStorage.setItem(NAME_PROMPT_KEY, 'true');
      setModalVisible(false);
    } catch {
      Alert.alert('Não foi possível salvar sua preferência', 'O formulário poderá aparecer novamente na próxima abertura.');
      setModalVisible(false);
    }
  }
  return <SafeAreaView style={styles.safe}><StatusBar style="dark" /><AppHeader /><ScrollView contentContainerStyle={styles.content}><Text style={styles.section}>Destaques</Text><ScrollView horizontal showsHorizontalScrollIndicator={false}><Pressable onPress={() => navigation.navigate('Event', { title: 'Na praia' })} style={styles.feature}><Placeholder image={images.naPraia} label="Na praia" large /><View style={styles.overlay}><Text style={styles.overlayTitle}>Na praia</Text><Text style={styles.overlayText}>Festival, música e programação completa.</Text></View></Pressable><View style={styles.feature}><Placeholder image={images.newMercadito} label="Show" large /></View></ScrollView><Text style={styles.section}>Para você</Text><View style={styles.grid}>{events.map((event) => <Pressable key={event.title} style={styles.card} onPress={() => navigation.navigate('Event', { title: event.title })}><Placeholder image={event.image} tone={event.tone} label={event.title} /><Text style={styles.cardTitle}>{event.title}</Text></Pressable>)}</View><Text style={styles.section}>Recentemente Adicionados</Text><View style={styles.grid}>{events.map((event) => <Pressable key={`recent-${event.title}`} style={styles.card} onPress={() => navigation.navigate('Event', { title: event.title })}><Placeholder image={event.image} tone={event.tone} label={event.title} /><Text style={styles.cardTitle}>{event.title}</Text></Pressable>)}</View></ScrollView><BottomNav active="home" /><NameModal visible={modalVisible} onClose={closeNameModal} /></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  content: { padding: 8, paddingBottom: 90 },
  section: { fontSize: 23, fontWeight: '700', marginVertical: 8, color: DARK },
  feature: { width: 260, height: 200, marginRight: 12, borderRadius: 12, overflow: 'hidden' },
  overlay: { position: 'absolute', bottom: 12, left: 12, right: 12 },
  overlayTitle: { color: '#FFF', fontSize: 17, fontWeight: '700' },
  overlayText: { color: '#FFF', fontSize: 11 },
  grid: { flexDirection: 'row', gap: 10 },
  card: { width: '31%' },
  cardTitle: { fontSize: 13, marginTop: 4 },
});
