import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Photo = ({ count, file }) => {
  const [ like, setLike ] = useState(count);

  const incrementLikes = () => {
    setLike(like + 1);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={file} />

      <Text style={styles.text}>{like}</Text>

      <TouchableOpacity onPress={incrementLikes}>
        <Text>Like</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
  },
  image: {
    width: 180,
    height: 180,
  }
});

export default Photo;