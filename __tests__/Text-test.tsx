import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import KRCText from '../app/components/KRCText';

it('renders correctly', () => {
  renderer.create(<KRCText>Hello</KRCText>);
});

it("contains text 'Hello'", () => {
  const {getByText} = render(<KRCText>Hello</KRCText>);
  expect(getByText('Hello')).not.toBeNull();
});
