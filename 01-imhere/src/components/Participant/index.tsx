import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface Props {
  name: string;
  handleRemove: (name: string) => void;
}

export function Participant({ handleRemove, name }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { name }
      </Text>

      <TouchableOpacity
          style={styles.button}
          onPress={() => handleRemove(name)}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  );
}
