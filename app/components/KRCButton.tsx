import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  useColorScheme,
} from 'react-native';
import React from 'react';
import KRCText from './KRCText';

interface KRCButtonProps {
  onPress?: (e: GestureResponderEvent) => void;
  style?: object;
  title: string;
  elevation?: number;
}

const KRCButton: React.FC<KRCButtonProps> = ({
  onPress,
  style,
  title,
  elevation,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = [
    buttonStyles.button,
    {flex: false},
    isDarkMode ? buttonStyles.buttonDark : buttonStyles.buttonLight,
    !!elevation && {elevation},
    style,
  ];
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles}>
        <KRCText
          bold
          style={[
            buttonStyles.text,
            isDarkMode ? buttonStyles.textDark : buttonStyles.textLight,
          ]}>
          {title}
        </KRCText>
      </View>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    elevation: 4,
  },
  buttonLight: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },

  buttonDark: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },

  text: {
    textAlign: 'center',
    fontSize: 16,
  },

  textLight: {
    color: '#000000',
  },

  textDark: {
    color: '#FFFFFF',
  },
});

export default KRCButton;
