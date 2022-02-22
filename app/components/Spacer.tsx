import {View} from 'react-native';
import React from 'react';

const Spacer = (props: {spacing?: number}) => {
  return <View style={{marginVertical: props.spacing || 10}} />;
};

export default Spacer;
