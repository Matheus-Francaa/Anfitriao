import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { DARK, YELLOW, images } from '../constants/theme';

const categories = [
  { name: 'Festas', image: images.naPraia },
  { name: 'Religião', image: images.casaDoCantador },
  { name: 'Bares', image: images.barDoChitao },
  { name: 'Restaurante', image: images.newMercadito },
];

const places = [
  { name: 'Páprica Burguer', owner: 'Angélica', description: 'Amei a hamburgueria!', image: images.barDoChitao },
  { name: 'Capital Motoweek', owner: 'Rafael', description: 'Muito música boa, motos espetaculares e uma vibe única.', image: images.newMercadito },
  { name: 'Capital Motoweek', owner: 'Rafael', description: 'Capital Motoweek foi incrível!', image: images.newMercadito },
  { name: 'Páprica Burguer', owner: 'Angélica', description: 'Amei a hamburgueria!', image: images.barDoChitao },
];

export default function ExploreScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <AppHeader />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TextInput placeholder="Pesquisar" placeholderTextColor="#C8C8C8" style={styles.search} />
        <Text style={styles.title}>Explorar</Text>
        <View style={styles.categories}>
          {categories.map((category) => (
            <Pressable key={category.name} style={styles.category} onPress={() => navigation.navigate('Event', { title: category.name })}>
              <Image source={category.image} style={styles.categoryImage} />
              <View style={styles.categoryShade} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.divider} />
        <Text style={styles.peopleTitle}>Na boca do povo!</Text>
        <View style={styles.places}>
          {places.map((place, index) => (
            <Pressable key={`${place.name}-${index}`} style={styles.placeCard} onPress={() => navigation.navigate('Event', { title: place.name })}>
              <View style={styles.placeTop}>
                <Image source={place.image} style={styles.placeImage} />
                <View style={styles.placeInfo}>
                  <Text style={styles.placeName}>{place.name}</Text>
                  <Text style={styles.owner}>●  {place.owner}</Text>
                  <Text style={styles.placeDescription}>{place.description}</Text>
                </View>
              </View>
              <Text style={styles.more}>Mais Detalhes</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <BottomNav active="explore" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  content: { padding: 8, paddingBottom: 18 },
  search: { height: 30, borderWidth: 1, borderColor: YELLOW, borderRadius: 18, textAlign: 'center', marginHorizontal: 16, marginTop: 2, marginBottom: 27, paddingVertical: 0 },
  title: { color: DARK, fontSize: 25, marginBottom: 25 },
  categories: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 27, paddingHorizontal: 0 },
  category: { width: '48%', height: 65, borderRadius: 17, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', backgroundColor: '#555' },
  categoryImage: { ...StyleSheet.absoluteFill, width: undefined, height: undefined },
  categoryShade: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,.38)' },
  categoryText: { color: '#FFF', fontSize: 15, fontWeight: '700' },
  divider: { height: 1, backgroundColor: YELLOW, marginTop: 30, marginBottom: 19 },
  peopleTitle: { color: DARK, fontSize: 24, marginBottom: 19 },
  places: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 10 },
  placeCard: { width: '48%', minHeight: 101, borderWidth: 1, borderColor: YELLOW, borderRadius: 14, padding: 7, justifyContent: 'space-between' },
  placeTop: { flexDirection: 'row', gap: 6 },
  placeImage: { width: 52, height: 52, borderRadius: 8 },
  placeInfo: { flex: 1 },
  placeName: { color: DARK, fontSize: 8, fontWeight: '700' },
  owner: { color: DARK, fontSize: 7, marginTop: 4 },
  placeDescription: { color: DARK, fontSize: 7, lineHeight: 10, marginTop: 4 },
  more: { color: '#D5A900', fontSize: 7, textAlign: 'center', marginTop: 5 },
});
