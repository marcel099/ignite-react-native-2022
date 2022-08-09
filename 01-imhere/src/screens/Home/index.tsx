import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = [
    'Marcelo',
    'Luis',
    'Jizar',
    'Larissa',
    'Mateus',
    'Rebeca',
    'Giovanna',
    'Fabricio',
    'Arthur',
    'Basso',
    'Bohrer',
    'Torben',
    'Vascon',
    'Yasmin',
    'Kemilly',
    'Felipe',
  ];

  function handlePartipantAdd() {
    if (participants.includes('Marcelo')) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com este nome.',
        [
          {
            text: 'Sim',
            onPress: () => Alert.alert('Deletado')
          },
          {
            text: 'Não',
            style: 'cancel',
          },
        ]
      );
    }
  }

  function handlePartipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Remover o participante ${name}?`
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
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handlePartipantAdd}
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
