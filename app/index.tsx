import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import styles from '@/styles/choice.styles';

export default function ChoiceScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JACKO MOTO</Text>

      <Pressable
        style={styles.cardWhite}
        onPress={() => router.push('/customer')}
      >
        <MaterialIcons name="person" size={32} />
        <Text style={styles.cardText}>Passager</Text>
      </Pressable>

      <Pressable
        style={styles.cardBlack}
        onPress={() => router.push('/driver')}
      >
        <MaterialIcons name="local-taxi" size={32} color="#facc15" />
        <Text style={[styles.cardText, { color: 'white' }]}>
          Chauffeur
        </Text>
      </Pressable>
    </View>
  );
}
