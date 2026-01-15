// app/components/CustomerPanel.tsx
import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Users, Package, Search, Zap } from 'lucide-react-native';
import styles from '../styles/customer.styles';

interface CustomerPanelProps {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  serviceType: 'PLACE' | 'COMPLET';
  setServiceType: Dispatch<SetStateAction<'PLACE' | 'COMPLET'>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

export default function CustomerPanel({
  destination,
  setDestination,
  serviceType,
  setServiceType,
  setIsSearching,
}: CustomerPanelProps) {
  return (
    <View style={styles.customerPanel}>
      <View style={styles.dragIndicator} />
      <Text style={styles.panelTitle}>OÙ ALLEZ-VOUS ?</Text>

      <View style={styles.inputContainer}>
        <Search size={20} color="#94a3b8" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder="Ex: Gare, Bord de mer, Hôtel..."
          value={destination}
          onChangeText={setDestination}
          placeholderTextColor="#94a3b8"
        />
      </View>

      <View style={styles.optionsRow}>
        <TouchableOpacity
          style={[styles.optionBtn, serviceType === 'PLACE' && styles.optionBtnActive]}
          onPress={() => setServiceType('PLACE')}
        >
          <Users size={22} color={serviceType === 'PLACE' ? "#ca8a04" : "#64748b"} />
          <Text style={[styles.optionLabel, serviceType === 'PLACE' && styles.optionLabelActive]}>1 Place</Text>
          <Text style={styles.priceTag}>100 F</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionBtn, serviceType === 'COMPLET' && styles.optionBtnActive]}
          onPress={() => setServiceType('COMPLET')}
        >
          <Package size={22} color={serviceType === 'COMPLET' ? "#ca8a04" : "#64748b"} />
          <Text style={[styles.optionLabel, serviceType === 'COMPLET' && styles.optionLabelActive]}>Complet</Text>
          <Text style={styles.priceTag}>Négo.</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => setIsSearching(true)}
      >
        <Text style={styles.ctaText}>SIGNALER MA PRÉSENCE</Text>
        <Zap size={20} color="#facc15" fill="#facc15" />
      </TouchableOpacity>
    </View>
  );
}
