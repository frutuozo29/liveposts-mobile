import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

// services
import api from '../../services/api'

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    !posts?.length && (() => {
      api.get()
        .then(({ data: { posts } }) => setPosts(posts))
    })()
  }, [posts])

  const renderItem = ({ item }) => (
    <View style={styles.itemcontainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>

      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => {
          navigation.navigate('Post', { post: item })
        }}
      >
        <Text style={styles.itemButtonText}>Visualizar</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={posts}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada'
  },

  list: {
    padding: 20
  },

  itemcontainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },

  itemDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 8,
    lineHeight: 24
  },

  itemButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00CDF2',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },

  itemButtonText: {
    fontSize: 16,
    color: '#00CDF2',
    fontWeight: 'bold'
  }
})

export default Home