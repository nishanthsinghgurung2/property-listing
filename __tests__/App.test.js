import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import App from '../App';
import axios from 'axios';
jest.mock('axios');

const testJson = [
    {
      id: 1,
      url: ["https://lid.zoocdn.com/u/1024/768/223bf84479e0869de1df65847d70d438bea3163e.jpg"],
      price: "£500,000",
      type: "4 bed flat",
      address: "Marylee way, london, SE11",
      number_of_bedrooms: 3,
      number_of_bathrooms: 2,
      sitting: 1
    }
  ];

// Our mocked response
const axiosResponse = {
  data: testJson,
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
};

describe('App', () => {
  afterEach(cleanup)
  it('should render a list of properties', async() => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve(axiosResponse)
    )
    const { queryByTestId, getByTestId, getByText, container } = render(<App />);
    await waitFor(() =>
      expect(getByTestId('property-type')).toHaveTextContent('4 bed flat')
    )
  })
  
  it('should show error message when failed to fetch the list of properties', async() => {
    axios.get.mockRejectedValueOnce(new Error('property listing not available'))
    const { queryByTestId, getByTestId, getByText, container } = render(<App />);
    
    await waitFor(() =>
      expect(getByTestId('error-properties')).toHaveTextContent('Error fetching properties')
    )
  })
})