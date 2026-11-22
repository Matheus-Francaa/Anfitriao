import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { DARK, MUTED, YELLOW, images } from '../constants/theme';

const groups = [
  { title: 'Reveillon Orla', image: images.casaDoCantador },
  { title: 'Na Praia', image: images.naPraia },
  { title: 'Capital Moto...', image: images.newMercadito },
];

const gallery = [
  images.barDoChitao,
  images.newMercadito,
  images.casaDoCantador,
  images.naPraia,
];

export default function ProfileScreen() {
  const [following, setFollowing] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <AppHeader />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.cover}>
          <View style={styles.coverShade} />
        </View>
        <View style={styles.profileRow}>
          <View style={styles.avatar}><Text style={styles.avatarText}>MF</Text></View>
          <View style={styles.userData}>
            <Text style={styles.name}>Mateus França</Text>
            <View style={styles.stats}><Text>999 Seguidores</Text><Text>7 Seguindo</Text></View>
            <Text>8 Locais Visitados</Text>
          </View>
          <View style={styles.actions}>
            <Pressable style={styles.followButton} onPress={() => setFollowing(!following)}><Text style={styles.buttonText}>{following ? 'Seguindo' : 'Seguir'}</Text></Pressable>
            <Pressable style={styles.chatButton} onPress={() => Alert.alert('Chat', 'A área de conversa está pronta para ser conectada.')}><Text style={styles.buttonText}>Chat</Text></Pressable>
          </View>
        </View>

        <Text style={styles.section}>Bio</Text>
        <Text style={styles.bioLine}>📘 Análise e Desenvolvimento de Sistemas | UCB</Text>
        <Text style={styles.bioDescription}>Gosto de conhecer lugares diferentes e que mostre sobre a cultura do local.</Text>

        <Text style={styles.section}>👥 Grupos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontal}>
          {groups.map((group) => <Pressable key={group.title} style={styles.groupCard} onPress={() => Alert.alert(group.title, 'Grupo selecionado.')}><Image source={group.image} style={styles.groupImage} /><Text style={styles.groupTitle} numberOfLines={1}>{group.title}</Text></Pressable>)}
        </ScrollView>

        <Text style={styles.section}>📷 Fotos/Vídeos⌄</Text>
        <View style={styles.gallery}>{gallery.map((image, index) => <Image key={index} source={image} style={styles.galleryImage} />)}</View>
      </ScrollView>
      <BottomNav active="profile" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  content: { paddingBottom: 15 },
  cover: { height: 96, backgroundColor: '#42535A', overflow: 'hidden' },
  coverShade: { flex: 1, backgroundColor: 'rgba(24,44,52,.35)' },
  profileRow: { minHeight: 78, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 7, marginTop: -23 },
  avatar: { width: 72, height: 72, borderRadius: 38, borderWidth: 2, borderColor: YELLOW, backgroundColor: '#738D93', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#FFF', fontSize: 20, fontWeight: '700' },
  userData: { flex: 1, paddingLeft: 8, paddingTop: 22 },
  name: { color: DARK, fontSize: 14, marginBottom: 5 },
  stats: { flexDirection: 'row', gap: 10, marginBottom: 3 },
  actions: { gap: 6, paddingTop: 21 },
  followButton: { backgroundColor: YELLOW, borderRadius: 8, paddingVertical: 5, paddingHorizontal: 12 },
  chatButton: { backgroundColor: '#D9D9D9', borderRadius: 8, paddingVertical: 5, paddingHorizontal: 15 },
  buttonText: { color: DARK, fontSize: 12, textAlign: 'center' },
  section: { color: DARK, fontSize: 16, fontWeight: '700', marginTop: 13, marginBottom: 7, paddingHorizontal: 5 },
  bioLine: { color: DARK, fontSize: 11, paddingHorizontal: 5 },
  bioDescription: { color: DARK, fontSize: 12, lineHeight: 16, marginTop: 12, paddingHorizontal: 20 },
  horizontal: { paddingHorizontal: 5, gap: 19 },
  groupCard: { width: 105, borderWidth: 1, borderColor: YELLOW, borderRadius: 0, overflow: 'hidden', backgroundColor: '#FFF' },
  groupImage: { width: 103, height: 61, resizeMode: 'cover' },
  groupTitle: { color: DARK, fontSize: 12, fontWeight: '600', padding: 5 },
  gallery: { flexDirection: 'row', gap: 6, paddingHorizontal: 5 },
  galleryImage: { width: 86, height: 108, resizeMode: 'cover', borderWidth: 1, borderColor: YELLOW },
});
