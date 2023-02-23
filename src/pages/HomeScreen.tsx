import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import colors from '../styles/colors'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
        <Text style={styles.title}>
          Bem vindo ao APP
        </Text>
        <Text style={styles.subtitle}>
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
        alignItems: 'flex-start',
        backgroundColor: colors.blue_light,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      lineHeight: 30,
      paddingHorizontal: 30,
    },
    subtitle: {
      fontSize: 17,
      fontWeight: '400',
      color: colors.text,
      lineHeight: 30,
      paddingHorizontal: 30,
    },
})

