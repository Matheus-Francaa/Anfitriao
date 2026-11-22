import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { DARK, YELLOW, images } from '../constants/theme';

const nearby = [
  { title: 'Bar do Chitão', description: 'O point da diversão com drinks incríveis e shows ao vivo que fazem a noite vibrar!', image: images.barDoChitao },
  { title: 'NewMercadito', description: 'Sabores incríveis ao som da batida eletrônica que transforma cada refeição em uma festa!', image: images.newMercadito },
  { title: 'Casa do Cantador', description: 'O palco da cultura que encanta com a essência e a poesia das raízes brasileiras!', image: images.casaDoCantador },
];

export default function MapScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [distance, setDistance] = useState(10);
  const distances = [10, 25, 50];
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <AppHeader />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.map}>
          <View style={[styles.street, styles.streetOne]} />
          <View style={[styles.street, styles.streetTwo]} />
          <View style={[styles.street, styles.streetThree]} />
          <View style={styles.park} />
          <View style={styles.water} />
          <Marker image={images.casaDoCantador} style={styles.markerOne} />
          <Marker image={images.newMercadito} style={styles.markerTwo} />
          <Marker image={images.barDoChitao} style={styles.markerThree} />
          <View style={styles.locationDot} />
        </View>
        <View style={styles.nearbyHeader}><Text style={styles.title}>Próximos a você</Text><Pressable style={styles.distance} onPress={() => setDistance(distances[(distances.indexOf(distance) + 1) % distances.length])}><Text style={styles.arrow}>⌄</Text><Text>{distance}Km</Text></Pressable></View>
        {nearby.map((event) => <Pressable key={event.title} style={styles.event} onPress={() => navigation.navigate('Event', { title: event.title })}><Image source={event.image} style={styles.eventImage} /><View style={styles.eventInfo}><Text style={styles.eventTitle}>{event.title}</Text><Text style={styles.eventDescription}>{event.description}</Text></View></Pressable>)}
      </ScrollView>
      <BottomNav active="map" />
    </SafeAreaView>
  );
}

function Marker({ image, style }: { image: any; style: object }) {
  return <View style={[styles.marker, style]}><Image source={image} style={styles.markerImage} /><View style={styles.pin} /></View>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  content: { paddingBottom: 8 },
  map: { height: 280, backgroundColor: '#E8E8EC', overflow: 'hidden', position: 'relative', borderBottomWidth: 4, borderBottomColor: YELLOW },
  street: { position: 'absolute', backgroundColor: '#FFF', borderWidth: 1, borderColor: '#D5D5DA', transform: [{ rotate: '25deg' }] },
  streetOne: { width: '150%', height: 38, top: 60, left: -60 },
  streetTwo: { width: '140%', height: 28, top: 155, left: -20, transform: [{ rotate: '-18deg' }] },
  streetThree: { width: '130%', height: 30, top: 225, left: -40, transform: [{ rotate: '40deg' }] },
  park: { position: 'absolute', width: 76, height: 100, backgroundColor: '#A8D27D', top: 22, left: 140, transform: [{ rotate: '25deg' }] },
  water: { position: 'absolute', width: 55, height: '120%', backgroundColor: '#B9DEEE', right: 40, top: -20, transform: [{ rotate: '35deg' }] },
  marker: { position: 'absolute', width: 38, height: 43, alignItems: 'center' },
  markerImage: { width: 34, height: 34, borderRadius: 9, borderWidth: 2, borderColor: YELLOW },
  pin: { width: 0, height: 0, borderLeftWidth: 7, borderRightWidth: 7, borderTopWidth: 10, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: YELLOW, marginTop: -1 },
  markerOne: { top: 72, left: '43%' },
  markerTwo: { top: 155, left: '55%' },
  markerThree: { top: 190, left: '23%' },
  locationDot: { position: 'absolute', width: 8, height: 8, borderRadius: 5, backgroundColor: YELLOW, top: 165, left: '36%' },
  nearbyHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingTop: 16, paddingBottom: 10 },
  title: { color: DARK, fontSize: 24 },
  distance: { backgroundColor: YELLOW, borderRadius: 7, paddingVertical: 8, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', gap: 5 },
  arrow: { fontSize: 19, lineHeight: 12 },
  event: { flexDirection: 'row', paddingHorizontal: 17, marginBottom: 12, gap: 11 },
  eventImage: { width: 80, height: 80, borderRadius: 18 },
  eventInfo: { flex: 1, paddingTop: 3 },
  eventTitle: { color: DARK, fontSize: 16, marginBottom: 5 },
  eventDescription: { color: DARK, fontSize: 11, lineHeight: 14 },
});
