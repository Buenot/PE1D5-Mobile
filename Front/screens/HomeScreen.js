import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

export default function FootballTeamsScreen() {
  const events = [
    { sport: 'Futebol', hostTeam: 'Time da Casa', hostTeamScore: 2, visitingTeam: 'Time Visitante', visitingTeamScore: 1, eventTime: '12:00 PM', eventsPlace: 'Estádio ABC' },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <ScrollView style={{ backgroundColor: '#f0f0f0' }}>
      {/* Campeonato Brasileiro Widget */}
      <View style={{ marginTop: 20, padding: 20, backgroundColor: '#333333' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#1cac28' }}>Campeonato Brasileiro</Text>
        {/* Adicione o widget API Futebol aqui, substituindo o espaço reservado */}
        {/* <div className="apifutebol-tabela widget-tabela" data-client-id="U5ZAX7MK49C9"></div> */}
        {/* Lembre-se de encontrar uma biblioteca ou implementação específica para widgets em React Native */}
      </View>

      {/* Eventos Próximos */}
      <View style={{ marginTop: 20, padding: 20, backgroundColor: '#ffffff' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#1cac28' }}>Eventos Próximos</Text>
        <View style={{ backgroundColor: '#BADABE', margin: 10, borderRadius: 5, overflow: 'hidden' }}>
          <ScrollView horizontal>
            <View>
              <Text style={{ color: '#ffffff', padding: 10, fontWeight: 'bold', textAlign: 'center' }}>Esporte</Text>
              {events.map((event, index) => (
                <Text key={index} style={{ padding: 10, textAlign: 'center' }}>{event.sport}</Text>
              ))}
            </View>
            <View>
              <Text style={{ color: '#ffffff', padding: 10, fontWeight: 'bold', textAlign: 'center' }}>Time da Casa</Text>
              {events.map((event, index) => (
                <Text key={index} style={{ padding: 10, textAlign: 'center' }}>{event.hostTeam}</Text>
              ))}
            </View>
            {/* Adicione mais colunas conforme necessário */}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => { /* Adicione a lógica de navegação para a página de eventos aqui */ }}>
          <Text style={{ textAlign: 'end', color: '#1cac28' }}>Ver todos</Text>
        </TouchableOpacity>

      </View>

      {/* Notícias */}
      <View style={{ marginTop: 20, padding: 20, backgroundColor: '#ffffff' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#1cac28' }}>Notícias</Text>
        <View style={{ height: 200, width: '100%' }}>
          <Image source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/GettyImages-1359250280-e1693234991472.jpg' }} style={{ flex: 1, resizeMode: 'cover' }} />
        </View>
        <Text style={{ textAlign: 'end', color: '#1cac28' }}>COPA DO BRASIL</Text>
        <Text style={{ textAlign: 'end' }}>A COPA MAIS AGUARDADA DO ANO ESTÁ AQUI</Text>
      </View>

      {/* Rodapé */}
      <View style={{ marginTop: 20, padding: 20, backgroundColor: '#BADABE', alignItems: 'center' }}>
        <Text style={{ color: '#ffffff' }}>Entre em contato conosco para obter suporte ou fazer perguntas.</Text>
      </View>
    </ScrollView>
  );
}
