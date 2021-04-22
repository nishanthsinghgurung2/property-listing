import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import PropertyDetails from './src/components/PropertyDetails/PropertyDetails';
export default function App() {

  const [ properties, setProperties ] = useState([]);
  const [ isError, setIsError ] = useState(false);
  const [isLoading, setLoading] = useState(true);
  
  const fetchProperties = () => {
    axios
      .get('http://my-json-server.typicode.com/nishanthsinghgurung2/property-listing/properties')
      .then((response) => {
        const propertiesList = response.data;
        setProperties(propertiesList);
        setLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <View style={styles.container}>
      {isError? <Text testID='error-properties' style={styles.error}>Error fetching properties</Text>: (
        <View>
          {isLoading? <Text>Loading...</Text> :
              <FlatList 
                data={properties}
                keyExtractor={item => item.id.toString()}
                renderItem = {({ item }) => (
                  <View testID="13">
                    <PropertyDetails
                      id={item.id}
                      url={item.url}
                      price={item.price}
                      type={item.type}
                      address={item.address}
                      number_of_bedrooms={item.number_of_bedrooms}
                      number_of_bathrooms={item.number_of_bathrooms}
                      sitting={item.sitting}
                      />
                  </View>
                )}
              />
          }
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red'
  }
});
