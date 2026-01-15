import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import styles from '@/styles/driver.styles';

export default function DriverScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Nom exact du style dans driver.styles.ts */}
      <Text style={styles.lockTitle}>RADAR BLOQUÉ</Text>

      <Pressable style={styles.activateBtn}>
        <Text style={styles.activateText}>ACTIVER PAR WAVE</Text>
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.laterBtn}>
        <Text style={styles.laterText}>Plus tard</Text>
      </Pressable>
    </View>
  );
}
