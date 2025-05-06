import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={onDecrease}
        disabled={quantity <= 1}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      
      <Text style={styles.quantity}>{quantity}</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={onIncrease}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    overflow: 'hidden',
  },
  button: {
    padding: 8,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EA1D2C',
  },
  quantity: {
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuantitySelector;