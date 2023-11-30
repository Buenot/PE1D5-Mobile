import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const EventList = ({ events, onRemove, onUpdate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bem-vindo à Página de edição de eventos</Text>
      <ScrollView style={styles.scrollableContainer}>
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Esporte</Text>
            <Text style={styles.tableHeader}>Time da Casa</Text>
            <Text style={styles.tableHeader}>Pontuação da Casa</Text>
            <Text style={styles.tableHeader}>Time Visitante</Text>
            <Text style={styles.tableHeader}>Pontuação do Visitante</Text>
            <Text style={styles.tableHeader}>Horário do Evento</Text>
            <Text style={styles.tableHeader}>Data do Evento</Text>
            <Text style={styles.tableHeader}>Local do Evento</Text>
            <Text style={styles.tableHeader}>Ações</Text>
          </View>
          {events.map((event) => (
            <View style={styles.tableRow} key={event.id}>
              <Text>{event.sport}</Text>
              <Text>{event.hostTeam}</Text>
              <Text>{event.hostTeamScore}</Text>
              <Text>{event.visitingTeam}</Text>
              <Text>{event.visitingTeamScore}</Text>
              <Text>{event.eventTime}</Text>
              <Text>{event.dateEvent}</Text>
              <Text>{event.eventsPlace}</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity onPress={() => onRemove(event.id)}>
                  <Text style={styles.removeButton}>Apagar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onUpdate(event.id)}>
                  <Text style={styles.updateButton}>Atualizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnSubmit} onPress={() => {}}>
          <Text>Cadastrar evento</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  scrollableContainer: {
    maxHeight: 500,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  removeButton: {
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: 5,
  },
  updateButton: {
    backgroundColor: '#1cac28',
    color: '#fff',
    padding: 5,
  },
  btnContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  btnSubmit: {
    backgroundColor: '#1cac28',
    color: '#ffffff',
    padding: 10,
    borderRadius: 3,
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#BADABE',
    color: '#ffffff',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default EventList;
