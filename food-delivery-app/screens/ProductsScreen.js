// Importações corretas:
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

const ProductsScreen = () => {
  const navigation = useNavigation();
  const { getItemsCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtra produtos com base na pesquisa
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Agrupa produtos por categoria
  const groupedProducts = filteredProducts.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});
  
  // Converte para array para uso com FlatList
  const categories = Object.keys(groupedProducts).map(category => ({
    category,
    data: groupedProducts[category]
  }));
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Food Delivery" showBackButton={false} />
      
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <FlatList
        data={categories}
        keyExtractor={item => item.category}
        renderItem={({ item }) => (
          <View style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{item.category}</Text>
            {item.data.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#EA1D2C',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  categorySection: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
  },
});

export default ProductsScreen;