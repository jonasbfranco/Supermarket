import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';

const { width, height } = Dimensions.get('window')


const slides = [
    {
        id: '1',
        image: require('../images/image1.png'),
        title: 'Bem vindo!',
        subtitle: 'O aplicativo Comprafacil, é a maneira \n mais simples e segura de ir ao supermercado.',
      },
      {
        id: '2',
        image: require('../images/image2.png'),
        title: 'Como usar?',
        subtitle: 'Escolha os produtos e adicione ao \n carrinho, efetue o pagamento e escolha \n a data e hora para entrega.',
      },
      {
        id: '3',
        image: require('../images/image3.png'),
        title: 'Vamos começar',
        subtitle: 'Efetue sua primeira compra.',
      },
];

const Slide = ({item}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Image source={item?.image} style={{height: '75%', width, resizeMode: 'contain'}} />
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
    )
}


const OnboardingScreen = () => {
  return (
    <SafeAreaView
        style={{flex: 1, backgroundColor: colors.blue_light}}
    >
        <FlatList 
            data={slides}
            contentContainerStyle={{height: height * 0.75, backgroundColor: colors.blue_light}}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item} />}
        />
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    subtitle: {
      color: colors.text,
      fontSize: 13,
      marginTop: 10,
      maxWidth: '80%',
      textAlign: 'center',
      lineHeight: 23,
    },
    title: {
      color: colors.text,
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'center',
    },
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    indicator: {
      height: 2.5,
      width: 10,
      backgroundColor: 'grey',
      marginHorizontal: 3,
      borderRadius: 2,
    },
    btn: {
      flex: 1,
      height: 50,
      borderRadius: 5,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
