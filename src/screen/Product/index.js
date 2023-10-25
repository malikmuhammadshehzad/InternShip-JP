import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
 
} from 'react-native';
 

const SingleProduct = ({route}) => {
  const {product} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: product.category.image}} style={styles.img} />

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
     margin:12, 
   
  },
  img: {
    width: 350,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  adToCartBtn: {
    backgroundColor: 'coral',
    padding: 13,
    borderRadius: 10,
    marginTop: 20,
    marginVertical: 22,
  },
  twoBtn: {
    flexDirection: 'row',
    columnGap: 20,
    marginVertical: 22,
  },
  btn: {
    fontSize: 40,
  },
});

export default SingleProduct;
