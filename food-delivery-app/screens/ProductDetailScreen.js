import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QuantitySelector from '../components/QuantitySelector';
import { useCart } from '../context/CartContext';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigation.navigate('Cart');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: product.image }} style={styles.image} />        
        <Header title="Detalhes do Produto" showBackButton={true} />
        {/* Descomente o botão Voltar se necessário
          <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
          </TouchableOpacity>
        </View> */}
        
        <View style={styles.content}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          
          <Text style={styles.descriptionTitle}>Descrição</Text>
          <Text style={styles.description}>{product.description}</Text>
          
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Quantidade:</Text>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(prev => prev + 1)}
              onDecrease={() => setQuantity(prev => Math.max(1, prev - 1))}
            />
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>
            R$ {(product.price * quantity).toFixed(2)}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: '600',
    color: '#EA1D2C',
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  quantityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 20,
    backgroundColor: 'white',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EA1D2C',
  },
  addButton: {
    backgroundColor: '#EA1D2C',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;