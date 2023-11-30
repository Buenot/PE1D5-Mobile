import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const EventForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastro de Eventos</Text>
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Esporte:</Text>
            <TextInput style={styles.input} placeholder="Esporte" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Time da casa:</Text>
            <TextInput style={styles.input} placeholder="Time da casa" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Time visitante:</Text>
            <TextInput style={styles.input} placeholder="Time visitante" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Horário do evento:</Text>
            <TextInput style={styles.input} placeholder="Horário do evento" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Data do evento (DD/MM/AAAA):</Text>
            <TextInput style={styles.input} placeholder="Data do evento" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Local do evento:</Text>
            <TextInput style={styles.input} placeholder="Local do evento" multiline />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Pontuação do time da casa:</Text>
            <TextInput style={styles.input} placeholder="Pontuação do time da casa" keyboardType="numeric" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Pontuação do time visitante:</Text>
            <TextInput style={styles.input} placeholder="Pontuação do time visitante" keyboardType="numeric" />
          </View>

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.btnText}>Cadastrar evento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    color: '#025008',
    marginTop: 22,
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    borderRadius: 15,
    marginVertical: 50,
    padding: 30,
    backgroundColor: 'rgba(186, 218, 190, 0.22)',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 5,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderColor: 'rgba(186, 218, 190, 0.45)',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  btnSubmit: {
    backgroundColor: '#1cac28',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventForm;
