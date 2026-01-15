import { StyleSheet } from 'react-native';

/**
 * Styles pour l'écran de choix Passager / Chauffeur
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 40,
  },
  cardWhite: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 24,
    marginBottom: 16,
  },
  cardBlack: {
    backgroundColor: '#18181b',
    padding: 20,
    borderRadius: 24,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
