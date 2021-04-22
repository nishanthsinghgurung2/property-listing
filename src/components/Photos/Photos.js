import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const win = Dimensions.get('window');

// Shows the photos in the property details.
const Photos = ({ url }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View>
      <View style={[styles.flexRow, styles.iconsOnImageHeader]}>
          <Icon testID="back-arrow-icon" name="chevron-left" size={30} color="white" />
          <View style={[styles.flexRow]}>
            <Icon testID="share-icon" name="share-square" size={30} color="white" />
            <Icon testID="heart-icon" name="heart" size={30} color="white" style={styles.marginLeft20} />
          </View>
      </View>
      <View style={[styles.imageFooter]}>
        <View style={[styles.iconsOnImageFooter]}>
          <Text testID="camera-index" h4 style={styles.photoIndex}>{currentIndex + 1}/{url.length}</Text>
          <Icon testID="camera-icon" style={styles.marginLeft20} name="camera" size={30} color="white" />
        </View>
      </View>
      {url.map(imageUrl => (
        <Image testID={imageUrl} key={imageUrl} style={styles.image} source={{uri: imageUrl}}></Image>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row'
  },
  iconsOnImageHeader: {
    top: 70,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 2
  },
  imageFooter: {
    top: 250,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
    alignSelf: 'center'
  },
  iconsOnImageFooter: {
    backgroundColor: '#595959',
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    borderRadius: 10
  },
  photoIndex: {
    color: "white"
  },
  image: {
    top: -30,
    width: win.width,
    height: 300
  },
  marginLeft20: {
    marginLeft: 20
  },
});

export default Photos;