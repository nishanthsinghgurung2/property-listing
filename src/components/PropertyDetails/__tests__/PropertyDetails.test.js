import React from 'react';
import { render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import PropertyDetails from '../PropertyDetails';

describe('PropertyDetails', () => {
  it('should get the right property details', () => {
    const { getByTestId } = render(<PropertyDetails
      id="1"
      url={["https://lid.zoocdn.com/u/1024/768/223bf84479e0869de1df65847d70d438bea3163e.jpg"]}
      price="£500,000"
      type="3 bed"
      address="Marylee way, london, SE11"
      number_of_bedrooms="3"
      number_of_bathrooms="2"
      sitting="1"
      />);
    expect(getByTestId('property-price')).toHaveTextContent('£500,000');
    expect(getByTestId('property-type')).toHaveTextContent('3 bed for sale');
    expect(getByTestId('property-address')).toHaveTextContent('Marylee way, london, SE11');
    expect(getByTestId('property-bedrooms')).toHaveTextContent('3');
    expect(getByTestId('property-bathrooms')).toHaveTextContent('2');
    expect(getByTestId('property-sitting')).toHaveTextContent('1');
  })
})