// app/components/FloatingBackButton.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/customer.styles';

export default function FloatingBackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.floatingBack}
      onPress={() => router.back()}
    >
      <ChevronLeft size={24} color="black" />
    </TouchableOpacity>
  );
}
