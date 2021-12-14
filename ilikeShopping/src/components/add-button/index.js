import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8ffd7',
    width: 55,
    height: 55,
    borderRadius: 28,
    position: 'absolute',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    zIndex: 1,
    elevation: 1,
  },

  text: {
    color: '#aed581',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const AddButton = ({onAdd}) => {
  const [scaleValue] = useState(new Animated.Value(0));
  const onButtonClicked = () => {
    // Don't forget about the callback function for Animated.timing.
    Animated.timing(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 700,
    }).start(() => {
      scaleValue.setValue(0);
    });
    onAdd();
  };
  const scaleValueInterpolation = scaleValue.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [1, 20, 30],
  });
  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {transform: [{scale: scaleValueInterpolation}]},
        ]}
      />
      <TouchableOpacity style={styles.container} onPress={onButtonClicked}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddButton;
