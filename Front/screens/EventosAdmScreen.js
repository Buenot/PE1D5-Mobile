import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import EventList from './EventList.js';

const EventosAdmScreen = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    sport: '',
    hostTeam: '',
    hostTeamScore: '',
    visitingTeam: '',
    visitingTeamScore: '',
    eventTime: '',
    dateEvent: '',
    eventsPlace: '',
  });

  const handleAddEvent = () => {
    setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: Date.now().toString() }]);
    setNewEvent({
      sport: '',
      hostTeam: '',
      hostTeamScore: '',
      visitingTeam: '',
      visitingTeamScore: '',
      eventTime: '',
      dateEvent: '',
      eventsPlace: '',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollableContainer}>
        <EventList events={events} />
      </ScrollView>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Cadastrar novo evento</Text>
        <TextInput
          style={styles.input}
          placeholder="Esporte"
          value={newEvent.sport}
          onChangeText={(text) => setNewEvent({ ...newEvent, sport: text })}
        />
        {/* Adicione os demais campos TextInput conforme necessário */}
        <TouchableOpacity style={styles.btnAdd} onPress={handleAddEvent}>
          <Text>Cadastrar evento</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Entre em contato conosco para obter suporte ou fazer perguntas.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (Estilos existentes)
  formContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    borderRadius: 10,
  },
  formHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  btnAdd: {
    backgroundColor: '#1cac28',
    color: '#ffffff',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
});

export default EventosAdmScreen;
