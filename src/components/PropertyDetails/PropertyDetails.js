
import React from 'react';
import { StyleSheet, View  } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Photos from '../Photos/Photos';

// Shows the details of property
const PropertyDetails = (props) => {
  const { id, url, price, type, address, number_of_bedrooms, number_of_bathrooms, sitting } = props;
  
  return (
    <View style={styles.container} testID={id}>
      <Photos url={url} />
      <View style={styles.propertydetails}>
        <Text
          h4
          style={[styles.colorGrey, styles.fontBold]}
          accessibilityRole={"text"}
          >
          Offers Over
        </Text>
        <Text 
          testID="property-price"
          h2
          style={[styles.marginTop5, styles.fontBold]}
          accessibilityRole={"text"}
        >
          {price}
        </Text>
        <Text
          testID="property-type"
          h4
          style={[styles.marginTop30, styles.fontBold]}
          accessibilityRole={"text"}
        >
          {type} for sale
        </Text>
        <Text 
          testID="property-address"
          h4
          style={[styles.marginTop5, styles.colorGrey]}
          accessibilityRole={"text"}
        >
          {address}
        </Text>
        <View style={[styles.flexRow, styles.marginTop30]}>
          {number_of_bedrooms > 0? (
            <View 
              style={styles.flexRow}
              accessible={true}
              accessibilityRole={"view"}
              accessibilityLabel={"Number of bedrooms"}
            >
              <Icon name="bed" size={30} color="gray" />
              <Text testID="property-bedrooms" h4 style={[styles.colorGrey, styles.marginLeftRight10]}>{number_of_bedrooms}</Text>
            </View>
          ): null}
          {number_of_bathrooms > 0? (
            <View 
              style={styles.flexRow}
              accessible={true}
              accessibilityRole={"view"}
              accessibilityLabel={"Number of bathrooms"}
            >
              <Icon name="bath" size={30} color="gray" />
              <Text testID="property-bathrooms" h4 style={[styles.colorGrey, styles.marginLeftRight10]}>{number_of_bathrooms}</Text>
            </View>
          ): null}
          {sitting > 0? (
            <View
              style={styles.flexRow}
              accessible={true}
              accessibilityRole={"view"}
              accessibilityLabel={"Number of sitting"}
            >
              <Icon name="wheelchair" size={30} color="gray" />
              <Text testID="property-sitting" h4 style={[styles.colorGrey, styles.marginLeftRight10]}>{sitting}</Text>
            </View>
          ): null}
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  propertydetails: {
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20
  },
  marginTop5: {
    marginTop: 5
  },
  fontBold: {
    fontWeight: 'bold'
  },
  marginTop30: {
    marginTop: 30
  },
  marginLeftRight10: {
    marginLeft: 10,
    marginRight: 10
  },
  colorGrey: {
    color: 'grey'
  },
  flexRow: {
    flexDirection: 'row'
  },
  textAlignRight: {
    textAlign: 'right'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
});

export default PropertyDetails;