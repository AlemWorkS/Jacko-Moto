import { View } from 'react-native';
import MapView from 'react-native-maps';

import TaxiMarker from '@/components/TaxiMarker';
import FloatingBackButton from '@/components/FloatingBackButton';
import CustomerPanel from '@/components/CustomerPanel';
import SearchingOverlay from '@/components/SearchingOverlay';

import { mapStyle } from '@/constants/mapStyle';
import styles from '@/styles/customer.styles';
import { useState } from 'react';

export default function CustomerScreen(){
  const [destination, setDestination] = useState('');
  const [serviceType, setServiceType] = useState<'PLACE' | 'COMPLET'>('PLACE');
  const [isSearching, setIsSearching] = useState(false);

  return (
    <View style={styles.flex1}>
      <MapView
        style={styles.fullMap}
        initialRegion={{
          latitude: 5.2045,
          longitude: -4.4147,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        customMapStyle={mapStyle}
      >
        <TaxiMarker lat={5.206} lng={-4.412} />
        <TaxiMarker lat={5.203} lng={-4.418} />
      </MapView>

      <FloatingBackButton />
      <CustomerPanel
        destination={destination}
        setDestination={setDestination}
        serviceType={serviceType}
        setServiceType={setServiceType}
        setIsSearching={setIsSearching}
      />
      {isSearching && <SearchingOverlay onCancel={() => setIsSearching(false)} />}
    </View>
  );
}
