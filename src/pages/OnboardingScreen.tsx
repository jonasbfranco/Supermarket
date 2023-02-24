import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
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
            <Image source={item?.image} style={{height: '70%', width, resizeMode: 'contain'}} />
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
    )
}


const OnboardingScreen = () => {

  const Footer = () => {
    return (
      <View 
        style={{
          height: height * 0.20,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          // backgroundColor: 'red',
        }}
      >
        <View
            style={{flexDirection: 'row', 
            justifyContent: 'center', 
            marginTop: 20 }}
        >
            
        </View>

          {/* Botoes */}
          <View style={{marginBottom:20}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity 
                  style={[
                          styles.btn, 
                          {backgroundColor: 'transparent', 
                              borderWidth: 1, 
                              borderColor: colors.blue}
                          ]}>
                  <Text 
                      style={{
                          fontWeight: 'bold', 
                          fontSize: 15, 
                          color: colors.blue
                          }}
                      onPress={() => {}} 
                  >PULAR</Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
                  <TouchableOpacity 
                        style={[
                          styles.btn,
                          {backgroundColor: colors.blue}]}>
                      <Text 
                          style={{
                              fontWeight: 'bold', 
                              fontSize: 15,
                              color: colors.white}}
                          onPress={() => {}} 
                      >PRÓXIMO</Text>
                  </TouchableOpacity>
              </View>  

          
          </View> 

      </View>
    )
  }


  return (
    <SafeAreaView
        style={{flex: 1, backgroundColor: colors.blue_light}}
    >
        <FlatList 
            data={slides}
            contentContainerStyle={{height: height * 0.70, backgroundColor: colors.blue_light}}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
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
