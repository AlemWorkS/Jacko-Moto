import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';

type Props = {
  lat: number;
  lng: number;
};

/**
 * Marker représentant un taxi sur la carte
 */
export default function TaxiMarker({ lat, lng }: Props) {
  return (
    <Marker coordinate={{ latitude: lat, longitude: lng }}>
      <View style={{ backgroundColor: 'black', padding: 6, borderRadius: 20 }}>
        <Text>🛺</Text>
      </View>
    </Marker>
  );
}
