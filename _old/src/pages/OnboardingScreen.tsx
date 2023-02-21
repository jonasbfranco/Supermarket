import React, { useRef, useState } from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    Dimensions, 
    FlatList, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
} from 'react-native'
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { width, height } = Dimensions.get('window')

const COLORS = {primary: '#282534', white: '#FFFFFF'}

const slides = [
    {
        id: '1',
        image: require('../images/image1.png'),
        title: 'Best Digital Solution',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: '2',
        image: require('../images/image2.png'),
        title: 'Achieve Your Goals',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: '3',
        image: require('../images/image3.png'),
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
const OnboardingScreen = ({navigation}) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const ref = useRef(null)

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.20,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{flexDirection: 'row', 
                    justifyContent: 'center', 
                    marginTop: 20 }}
                >
                    {slides.map((_, index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.white,
                                    width: 25,
                                }
                            ]} />
                    ))}
                </View>
                <View style={{marginBottom:20}}>
                    {
                        currentSlideIndex == slides.length -1 
                        ?
                        <View style={{height: 50}}>
                            <TouchableOpacity 
                                style={[styles.btn]}
                                onPress={() => navigation.navigate("HomeScreen")}
                            >
                                <Text 
                                    style={{
                                        fontWeight: 'bold', 
                                        fontSize: 15}}
                                    onPress={goNextSlide} 
                                >COMEÇAR</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity 
                                style={[
                                        styles.btn, 
                                        {backgroundColor: 'transparent', 
                                            borderWidth: 1, 
                                            borderColor: COLORS.white}
                                        ]}>
                                <Text 
                                    style={{
                                        fontWeight: 'bold', 
                                        fontSize: 15, 
                                        color: COLORS.white
                                        }}
                                    onPress={skip} 
                                >PULAR</Text>
                            </TouchableOpacity>
                        <View style={{width: 15}} />
                            <TouchableOpacity style={[styles.btn]}>
                                <Text 
                                    style={{
                                        fontWeight: 'bold', 
                                        fontSize: 15}}
                                    onPress={goNextSlide} 
                                >PRÓXIMO</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    
                    
                </View>
            </View>
        )
    }

    const updateCurrentSlideIndex = e => {
        // console.log(e)
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        // console.log(contentOffsetX)
        const currentIndex = Math.round(contentOffsetX / width)
        // console.log(contentOffsetX)
        // console.log(width)
        // console.log(currentIndex)
        setCurrentSlideIndex(currentIndex)

    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex)
        }
    }

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        // console.log(lastSlideIndex)
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex)

    }

  return (
    <SafeAreaView 
        style={{flex: 1, backgroundColor: COLORS.primary}}>
        <StatusBar style="light" />
        <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            pagingEnabled
            data={slides}
            contentContainerStyle={{height: height * 0.75}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item} />}

        />
        <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    subtitle: {
      color: COLORS.white,
      fontSize: 13,
      marginTop: 10,
      maxWidth: '70%',
      textAlign: 'center',
      lineHeight: 23,
    },
    title: {
      color: COLORS.white,
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

export default OnboardingScreen