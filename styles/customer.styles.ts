// app/styles/customer.styles.ts
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  fullMap: { flex: 1 },

  floatingBack: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 20,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 20,
    elevation: 10,
    shadowOpacity: 0.1,
  },

  customerPanel: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
    paddingBottom: Platform.OS === 'ios' ? 40 : 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },

  dragIndicator: { width: 40, height: 5, backgroundColor: '#f1f5f9', borderRadius: 10, alignSelf: 'center', marginBottom: 20 },

  panelTitle: { fontSize: 11, fontWeight: '900', color: '#94a3b8', letterSpacing: 2, marginBottom: 10 },

  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f8fafc', borderRadius: 20, paddingHorizontal: 15 },
  inputIcon: { marginRight: 10 },
  textInput: { flex: 1, paddingVertical: 15, fontSize: 16, fontWeight: '700', color: '#0f172a' },

  optionsRow: { flexDirection: 'row', gap: 12, marginTop: 20 },
  optionBtn: { flex: 1, backgroundColor: '#f8fafc', padding: 16, borderRadius: 24, alignItems: 'center', borderWidth: 2, borderColor: '#f8fafc' },
  optionBtnActive: { borderColor: '#facc15', backgroundColor: '#fffbeb' },
  optionLabel: { fontSize: 14, fontWeight: 'bold', color: '#64748b', marginTop: 8 },
  optionLabelActive: { color: '#854d0e' },
  priceTag: { fontSize: 10, fontWeight: '900', backgroundColor: 'white', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, marginTop: 5, color: '#0f172a' },

  ctaButton: { backgroundColor: '#0f172a', padding: 22, borderRadius: 28, marginTop: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, elevation: 5 },
  ctaText: { color: '#facc15', fontWeight: '900', fontSize: 17, fontStyle: 'italic' },

  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.98)', zIndex: 999, alignItems: 'center', justifyContent: 'center', padding: 40 },
  pulseContainer: { width: 120, height: 120, backgroundColor: '#facc15', borderRadius: 60, alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
  overlayTitle: { fontSize: 28, fontWeight: '900', fontStyle: 'italic', color: '#0f172a' },
  overlayBody: { fontSize: 15, color: '#64748b', textAlign: 'center', marginTop: 10, lineHeight: 22 },
  cancelBtn: { marginTop: 50, padding: 15 },
  cancelText: { color: '#94a3b8', fontWeight: 'bold' },
});

export default styles;
