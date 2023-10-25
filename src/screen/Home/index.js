import {
    Button,
    Image,
    Pressable,
    ScrollView,
   
    Text,
    View,
  } from 'react-native';
  import React, {useEffect} from 'react';
 
  import {useDispatch, useSelector} from 'react-redux';
  import {productsData} from '../../redux/reducers/ProductReducer';
  import {useNavigation} from '@react-navigation/native';
import { styles } from './Style';
 
  
  const Product = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.product);
    console.log('Products product file data', products);
    useEffect(() => {
      dispatch(productsData());
    }, [dispatch]);
    
    const navigation = useNavigation();
  
    const handleSingleProduct = product => {
      navigation.navigate('product', {product});
      console.log("singleProduct Data" , product);
    };
    return (
      <ScrollView>
        
        <View style={styles.container}>
      
          { products?.map((val, index) => {
            return (
              <View key={index}>
                <Pressable
                  onPress={() => handleSingleProduct(val)}
                  style={styles.ProductContainer}>
                  <Image source={{uri: val.category.image}} style={styles.img} />
                  <Text style={styles.title}>{val.title} </Text>
  
                  <Text style={styles.description}> {val.description}</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  };
  
  export default Product;
  
 