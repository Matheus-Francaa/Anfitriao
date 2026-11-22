import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrimaryButton } from './Buttons';
import { YELLOW } from '../constants/theme';

export default function NameModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  return <Modal visible={visible} transparent animationType="fade"><View style={styles.backdrop}><View style={styles.card}><Text style={styles.title}>Como deseja ser Chamado(a)?</Text><TextInput value={name} onChangeText={setName} placeholder="Digite o seu nome" placeholderTextColor="#C5C5C5" style={styles.input} /><PrimaryButton title="Iniciar" onPress={onClose} /></View></View></Modal>;
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,.4)', alignItems: 'center', justifyContent: 'center' },
  card: { width: '84%', borderRadius: 20, padding: 22, backgroundColor: '#FFF', alignItems: 'center' },
  title: { fontSize: 15, marginBottom: 12 },
  input: { height: 40, width: '100%', borderWidth: 1, borderColor: YELLOW, borderRadius: 22, textAlign: 'center', marginBottom: 10, paddingHorizontal: 15 },
});
