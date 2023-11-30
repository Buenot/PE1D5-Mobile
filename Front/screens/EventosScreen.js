import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const EventosScreen = ({ events }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bem-vindo à Página de eventos</Text>
      {events && events.length > 0 ? (
        <ScrollView>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ScrollView>
      ) : (
        <Text>Nenhum evento disponível.</Text>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  footer: {
    marginTop: 16,
    color: 'gray',
  },
});

export default EventosScreen;
