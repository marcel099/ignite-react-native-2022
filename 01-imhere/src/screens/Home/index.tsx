import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handlePartipantAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com este nome.'
      );
    }

    setParticipants(previousState => [...previousState, name]);
    setParticipantName('');
  }

  function handlePartipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => setParticipants(
            (previousState) =>
              previousState.filter(participant => participant !== name)
          ),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePartipantAdd(participantName)}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            handleRemove={handlePartipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
} 
