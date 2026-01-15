// app/components/SearchingOverlay.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bell } from 'lucide-react-native';
import styles from '../styles/customer.styles';

interface SearchingOverlayProps {
  onCancel: () => void;
}

export default function SearchingOverlay({ onCancel }: SearchingOverlayProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.pulseContainer}>
        <Bell size={50} color="black" />
      </View>
      <Text style={styles.overlayTitle}>SIGNAL ENVOYÉ !</Text>
      <Text style={styles.overlayBody}>
        Les tricycles proches de vous reçoivent votre position.
      </Text>
      <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
        <Text style={styles.cancelText}>Annuler le signal</Text>
      </TouchableOpacity>
    </View>
  );
}
