import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Post = ({ route }) => {
  const { name, description, votes } = route.params.post

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.votes}>Total de votos: {votes}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    color: '#999'
  },
  votes: {
    fontSize: 14,
    marginTop: 36,
    color: '#999'
  }
})

export default Post