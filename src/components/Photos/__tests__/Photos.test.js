import React from 'react';
import { render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'

import Photos from "../Photos"

const urls = ["https://lid.zoocdn.com/u/1024/768/223bf84479e0869de1df65847d70d438bea3163e.jpg"];

describe('Photos', () => {
  it('should display first photo on ui', () => {
    const { getByTestId } = render(<Photos url={urls} />);
    expect(getByTestId('https://lid.zoocdn.com/u/1024/768/223bf84479e0869de1df65847d70d438bea3163e.jpg')).toBeDefined();
  })

  it('should show various icons on the image', () => {
    const { getByTestId } = render(<Photos url={urls} />);
    expect(getByTestId('back-arrow-icon')).toBeDefined();
    expect(getByTestId('share-icon')).toBeDefined();
    expect(getByTestId('heart-icon')).toBeDefined();
    expect(getByTestId('camera-icon')).toBeDefined();
  })

  it('should show current photo index', () => {
    const { getByTestId } = render(<Photos url={urls} />);
    expect(getByTestId('camera-index')).toHaveTextContent('1/1');
  })
})