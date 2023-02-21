import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Bem vindo ao APP {'\n'}
          Estamos em desenvolvimento!
        </Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 150
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#575757',
      lineHeight: 30,
    }
})

