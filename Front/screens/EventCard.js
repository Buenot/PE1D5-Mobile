import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://cursos.ifsp.edu.br/static/img/rodape/Marca_IFSP_2015_GRU-05.jpg' }}
        style={styles.cardImage}
      />
      <ScrollView>
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>Esporte: {event.sport}</Text>
          <Text style={styles.cardText}>Time da Casa: {event.hostTeam}</Text>
          <Text style={styles.cardText}>Time Visitante: {event.visitingTeam}</Text>
          <Text style={styles.cardText}>Horário do Evento: {event.eventTime}</Text>
          <Text style={styles.cardText}>Data do Evento: {event.dateEvent}</Text>
          <Text style={styles.cardText}>Local do Evento: {event.eventsPlace}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 386,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginRight: 15,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  cardContent: {
    width: '100%',
    marginTop: 10,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default EventCard;
