import {StyleSheet, Text, TextProps, StyleProp, TextStyle} from 'react-native';
import React from 'react';

interface KRCTextProps extends TextProps {
  bold?: boolean;
  color?: string;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  large?: boolean;
  small?: boolean;
  style?: StyleProp<TextStyle>;
}

const KRCText: React.FC<KRCTextProps> = props => {
  const {bold, color, textAlign, large, small, style, children, ...others} =
    props;
  const styles = StyleSheet.flatten([
    bold && styleSheet.bold,
    small && !large && styleSheet.small,
    color && {color},
    textAlign && {textAlign},
    large && !small && styleSheet.large,
    style as any,
  ]);
  return (
    <Text style={styles} {...others}>
      {children}
    </Text>
  );
};

export default KRCText;

const styleSheet = StyleSheet.create({
  small: {
    fontSize: 10,
  },
  large: {
    fontSize: 30,
  },

  bold: {
    fontWeight: 'bold',
  },
});
