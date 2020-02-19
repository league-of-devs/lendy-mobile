import React, { useEffect, useState, useRef } from 'react'
import { View, Alert, Text, Dimensions, TouchableOpacity } from 'react-native'
import Header from '../Components/Header'
import Styles from '../Styles'
import { ScrollView } from 'react-native-gesture-handler'
import TextInput from '../Components/TextInput'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../Styles/colors'
import getAPI from '../Services/api'
import ErrorMsgs from '../Helper/ErrorMessages'
import { useNavigation } from 'react-navigation-hooks'

const IconButton = ({ onPress, icon, style }) => {
  const [beingPressed, setBeingPressed] = useState(false)

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} onPressIn={() => setBeingPressed(true)} onPressOut={() => setBeingPressed(false)} style={[Styles.iconButton, { borderWidth: 2, borderColor: '#fff', backgroundColor: beingPressed ? '#ffffff00' : '#fff', elevation: beingPressed ? 0 : Styles.button.elevation }, style]}>
      { icon }
    </TouchableOpacity>
  )
}

export default function CreateItem(props) {

  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({  })

  const scrollRef = useRef()

  const navigation = useNavigation()

  const { type } = props.navigation.state.params

  const handleChange = (name, text) => {
    const x = formData
    x[name] = text
    setFormData(x)
  }

  const nextPage = () => {
    setPage(page+1)
  }

  const previousPage = () => {
    setPage(page-1)
  }

  const handleSubmit = () => {
    getAPI().post(`/${type}/create`, formData)
      .then(response => {
        setFormData({})
        navigation.navigate('Main')
      })
      .catch(async err => {
        Alert.alert('Erro', ErrorMsgs[err.response.data.error] || err.response.data.error)
      })
  }

  useEffect(() => {
    scrollRef.current.scrollTo({ x: Dimensions.get('screen').width * page })
  }, [page])

  return (
    <View style={Styles.cyanContainer}>
      <Header/>
      <View style={Styles.verticalCenter}>
        <ScrollView ref={scrollRef} showsHorizontalScrollIndicator={false} style={[Styles.container]} horizontal={true} scrollEnabled={false}>
          <View style={Styles.scrollPage}>
            { type === 'request' ? (
              <Text style={[Styles.text, Styles.white, Styles.semiBold, Styles.big]}>Quanto você precisa?</Text>
            ): (
              <Text style={[Styles.text, Styles.white, Styles.semiBold, Styles.big]}>Quanto você quer investir?</Text>
            )}
            <TextInput onChange={(v) => handleChange('value', v)} style={{ marginTop: 10, textAlign: 'center' }} keyboardType='numeric' placeholder='R$ 0,00 ' />
            <IconButton onPress={nextPage} icon={ <MaterialCommunityIcons size={24} name='arrow-right-bold' color={Colors.cyan} /> } />
          </View>
          <View style={Styles.scrollPage}>
            { type === 'request' ? (
              <Text style={[Styles.text, Styles.white, Styles.semiBold, Styles.big, Styles.center]}>Em quantos dias você pode pagar?</Text>
            ): (
              <Text style={[Styles.text, Styles.white, Styles.semiBold, Styles.big, Styles.center]}>Em quantos dias você quer receber?</Text>
            )}
            <TextInput onChange={(v) => handleChange('days', v)} style={{ marginTop: 10, textAlign: 'center' }} keyboardType='numeric' placeholder='10 dias ' />
            <View style={Styles.rowFlex}>
              <IconButton onPress={previousPage} icon={ <MaterialCommunityIcons size={24} name='arrow-left-bold' color={Colors.cyan} /> } />
              <IconButton onPress={nextPage} icon={ <MaterialCommunityIcons size={24} name='arrow-right-bold' color={Colors.cyan} /> } />
            </View>
          </View>
          <View style={Styles.scrollPage}>
            { type === 'request' ? (
              <Text style={[Styles.text, Styles.white, Styles.semiBold, Styles.big]}>Qual o % máximo de juros?</Text>
            ): (
              <Text style={[Styles.text, Styles.white, Styles.semiBold, Styles.big]}>Quanto % de juros?</Text>
            )}
            <TextInput onChange={(v) => handleChange('fee', v)} style={{ marginTop: 10, textAlign: 'center' }} keyboardType='numeric' placeholder='3 % ' />
            <View style={Styles.rowFlex}>
              <IconButton onPress={previousPage} icon={ <MaterialCommunityIcons size={24} name='arrow-left-bold' color={Colors.cyan} /> } />
              <IconButton onPress={handleSubmit} icon={ <MaterialCommunityIcons size={24} name='arrow-right-bold' color={Colors.cyan} /> } />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}