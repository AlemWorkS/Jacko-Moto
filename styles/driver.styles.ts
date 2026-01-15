// app/styles/driver.styles.ts
import { StyleSheet, Platform } from 'react-native';

/**
 * Styles pour l'écran Chauffeur (Driver)
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  lockBadge: {
    backgroundColor: '#facc15',
    padding: 25,
    borderRadius: 35,
    transform: [{ rotate: '-8deg' }],
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  lockTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: -1,
    marginBottom: 5,
  },
  lockDesc: {
    color: '#52525b',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 40,
    textAlign: 'center',
  },
  priceCard: {
    width: '100%',
    backgroundColor: '#18181b',
    padding: 30,
    borderRadius: 40,
    borderLeftWidth: 6,
    borderLeftColor: '#facc15',
    marginVertical: 40,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  priceBig: {
    color: '#facc15',
    fontSize: 50,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  priceSmall: {
    color: '#52525b',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
  },
  activateBtn: {
    backgroundColor: '#facc15',
    width: '100%',
    padding: 22,
    borderRadius: 28,
    alignItems: 'center',
  },
  activateText: {
    color: 'black',
    fontWeight: '900',
    fontSize: 18,
    fontStyle: 'italic',
  },
  laterBtn: {
    marginTop: 30,
  },
  laterText: {
    color: '#52525b',
    fontWeight: 'bold',
  },
});

export default styles;
