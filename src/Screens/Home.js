import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import Styles from '../Styles'

import { ScrollView } from 'react-native-gesture-handler'

import Switch from '../Components/Switch'
import Header from '../Components/Header'
import ItemCard from '../Components/ItemCard'
import Button from '../Components/Button'
import getAPI from '../Services/api'
import { useSelector } from 'react-redux'

export default function Home({ navigation }) {

  const [switchValue, setSwitchValue] = useState(false)

  const userState = useSelector(state => state.user)

  const [offers, setOffers] = useState([])
  const [myOffers, setMyOffers] = useState([])
  const [requests, setRequests] = useState([])

  const scrollPosition = new Animated.Value(0)
  const scrollPositionRef = useRef(scrollPosition)

  const handleScroll = (e) => {
    const position = e.nativeEvent.contentOffset.y

    Animated.timing(scrollPositionRef.current, {
      toValue: position,
      duration: 0,
      easing: Easing.ease
    }).start()
  }

  const getData = () => {
    console.log(userState)

    getAPI().get('/request/my_requests')
      .then(response => response.data)
      .then(response => {
        setRequests(response.list)
        console.log('MY REQUESTS', response.list)
        // if (response.list.length > 0)
        //   getAPI().get('/offer/search', { body: { minValue: response.list[0].value, maxFee: response.list[0].fee, minDays: response.list[0].days } })
        //     .then(response => response.data)
        //     .then(response => {
        //       setOffers(response.data)
        //     })
      })

    getAPI().get('/offer/my_offers')
      .then(response => response.data)
      .then(response => {
        setMyOffers(response.list)
      })

  }

  const opacityValue = scrollPositionRef.current.interpolate({
    inputRange: [0, 40],
    outputRange: [1, 0]
  })
  
  useEffect(getData, [])

  return (
    <View style={Styles.cyanContainer}>
      <Header/>
      <Animated.View style={{ paddingHorizontal: 10 }}>
        <Switch options={ [ 'Investir', 'Solicitar' ] } onChange={setSwitchValue} />
      </Animated.View>
      <ScrollView onScroll={handleScroll}>
        <Animated.View style={{ paddingHorizontal: 10, paddingVertical: 20, opacity: opacityValue }}>
          { !switchValue ? (
            <View>
              <Text style={[Styles.text, Styles.white, Styles.big]}>
                <Text style={Styles.semiBold}>
                  {myOffers.length > 0 ? `Belos investimentos, ${userState.name.split(' ')[0]}` : `Bora investir, ${userState.name.split(' ')[0]}?`}
                </Text>
              </Text>
              <Text style={[Styles.text, Styles.white, Styles.big]}>
                Você tem{ ' ' }
                <Text style={Styles.semiBold}>
                  { myOffers.length } ofertas{ ' ' }
                </Text>
                em aberto{ myOffers.length > 0 ? ':' : '.' } 
              </Text>
            </View>
          ) : (
            <View>
              <Text style={[Styles.text, Styles.white, Styles.big]}>
                <Text style={Styles.semiBold}>
                  {myOffers.length > 0 ? `Boas notícias, ${userState.name.split(' ')[0]}!` : `Sinto muito, ${userState.name.split(' ')[0]}...`}
                </Text>
              </Text>
              <Text style={[Styles.text, Styles.white, Styles.big]}>
                Você possui{ ' ' }
                <Text style={Styles.semiBold}>
                  { offers.length } ofertas{ ' ' }
                </Text>
                disponíveis{ offers.length > 0 ? ':' : '.' } 
              </Text>
            </View>
          ) }
        </Animated.View>
        { !switchValue ? 
          myOffers.map((offer, i) => (
            <ItemCard data={offer} key={i} type='offer' />
          ))
          : 
          offers.map((request, i) => (
            <ItemCard data={request} key={i} type='request' />
          ))
        }
        <View style={Styles.padding}>

          { !switchValue ? 
            <Button onPress={() => navigation.navigate('CreateItem', { type: 'offer' })} textColor='#707070' color='#fff' text='Adicionar oferta'/>
            :
            <Button onPress={() => navigation.navigate('CreateItem', { type: 'request' })} textColor='#707070' color='#fff' text='Criar solicitação'/>
          }
        </View>
      </ScrollView>
    </View>
  )
}