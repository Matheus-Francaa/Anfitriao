import React, { useMemo, useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import { DARK, MUTED, YELLOW, images } from '../constants/theme';

type AgendaEvent = { id: string; title: string; time: string; image: any; color: string };

const suggestions: AgendaEvent[] = [
  { id: 'chitao', title: 'Bar do Chitão', time: '00:00 - 00:00', image: images.barDoChitao, color: '#A8B5B1' },
  { id: 'praia', title: 'Na Praia', time: '00:00 - 00:00', image: images.naPraia, color: '#4C211C' },
  { id: 'orla', title: 'Reveillon Orla', time: '00:00 - 00:00', image: images.casaDoCantador, color: '#0A7077' },
  { id: 'moto', title: 'Capital Moto...', time: '00:00 - 00:00', image: images.newMercadito, color: '#592020' },
];

const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const slots = ['07:00', '09:00', '11:00', '12:00'];

export default function AgendaScreen() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [scheduled, setScheduled] = useState<string[]>(['chitao', 'moto']);
  const scheduledEvents = useMemo(() => suggestions.filter((event) => scheduled.includes(event.id)), [scheduled]);

  function toggleEvent(event: AgendaEvent) {
    setScheduled((current) => current.includes(event.id) ? current.filter((id) => id !== event.id) : [...current, event.id]);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <AppHeader />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sua agenda!!</Text>
        <View style={styles.calendar}>
          <View style={styles.dayRow}>{days.map((day, index) => <Pressable key={day} style={styles.day} onPress={() => setSelectedDay(index)}><Text style={[styles.dayText, selectedDay === index && styles.selectedDayText]}>{day}</Text></Pressable>)}</View>
          <View style={styles.timeline}>
            <View style={styles.times}>{slots.map((slot) => <Text key={slot} style={styles.time}>{slot}</Text>)}</View>
            <View style={styles.columns}>{days.map((day, index) => <Pressable key={day} style={[styles.column, selectedDay === index && styles.selectedColumn]} onPress={() => setSelectedDay(index)}>{scheduledEvents.filter((_, eventIndex) => eventIndex % days.length === index).map((event) => <View key={event.id} style={[styles.eventBlock, { backgroundColor: event.color }]}><Image source={event.image} style={styles.eventImage} /><Text style={styles.eventLabel} numberOfLines={1}>{event.title}</Text></View>)}</Pressable>)}</View>
          </View>
        </View>
        <Text style={styles.section}>Para lotar a agenda</Text>
        {suggestions.map((event) => <View key={event.id} style={styles.suggestion}><Image source={event.image} style={styles.suggestionImage} /><View style={styles.suggestionInfo}><Text style={styles.suggestionTitle}>{event.title}</Text><Text style={styles.suggestionTime}>{event.time}</Text><Text style={styles.suggestionDescription}>{event.id === 'chitao' ? 'O point da diversão com drinks incríveis e shows ao vivo que fazem a noite vibrar!' : event.id === 'praia' ? 'Melhor evento de música de Brasília!' : event.id === 'orla' ? 'Melhor ano novo de Brasília!' : 'Um super evento de Rock!'}</Text></View><Pressable style={[styles.addButton, scheduled.includes(event.id) && styles.removeButton]} onPress={() => toggleEvent(event)}><Text style={styles.addText}>{scheduled.includes(event.id) ? 'Remover' : 'Adicionar'}</Text></Pressable></View>)}
      </ScrollView>
      <BottomNav active="agenda" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  content: { padding: 2, paddingBottom: 18 },
  title: { color: DARK, fontSize: 16, fontWeight: '700', marginBottom: 14 },
  calendar: { borderWidth: 2, borderColor: YELLOW, borderRadius: 28, overflow: 'hidden', height: 190 },
  dayRow: { height: 39, flexDirection: 'row', borderBottomWidth: 1, borderColor: YELLOW },
  day: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  dayText: { color: DARK, fontSize: 9 },
  selectedDayText: { color: '#D5A900', fontWeight: '800' },
  timeline: { flex: 1, flexDirection: 'row' },
  times: { width: 44, justifyContent: 'space-around', paddingVertical: 8 },
  time: { color: DARK, fontSize: 9 },
  columns: { flex: 1, flexDirection: 'row' },
  column: { flex: 1, borderLeftWidth: 1, borderColor: YELLOW, padding: 3 },
  selectedColumn: { backgroundColor: 'rgba(255,204,0,.08)' },
  eventBlock: { borderRadius: 8, minHeight: 55, marginTop: 16, padding: 3, alignItems: 'center', justifyContent: 'center' },
  eventImage: { width: 28, height: 28, borderRadius: 6 },
  eventLabel: { color: '#FFF', fontSize: 6, marginTop: 2 },
  section: { color: DARK, fontSize: 16, fontWeight: '700', marginTop: 18, marginBottom: 14 },
  suggestion: { minHeight: 78, flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 9 },
  suggestionImage: { width: 76, height: 76, borderRadius: 20 },
  suggestionInfo: { flex: 1 },
  suggestionTitle: { color: DARK, fontSize: 14, fontWeight: '700', marginBottom: 3 },
  suggestionTime: { color: MUTED, fontSize: 10 },
  suggestionDescription: { color: DARK, fontSize: 10, lineHeight: 13, marginTop: 3 },
  addButton: { backgroundColor: YELLOW, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 13 },
  removeButton: { backgroundColor: '#E8E8E8' },
  addText: { color: DARK, fontSize: 11 },
});
