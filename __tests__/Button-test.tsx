import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import KRCButton from '../app/components/KRCButton';

it('renders correctly', () => {
  renderer.create(<KRCButton title="Hello" />);
});

it('recieves tap inputs', () => {
  let n = 0;
  const {getByText} = render(
    <KRCButton
      title="Hello"
      onPress={() => {
        n = 1;
      }}
    />,
  );
  fireEvent.press(getByText('Hello'));
  expect(n).toBe(1);
});
