import React from 'react'
import Card from './Card'
import { View, Text } from 'react-native'
import Styles from '../Styles'
import Button from './Button'

export default function ItemCard({ data, type, handleButtonPress, ...props }) {
  
  return (
    <Card {...props}>
      <View style={[Styles.stretch, { flexDirection: 'row' }]}>
        <Text style={[Styles.cardTitle, Styles.center]}>R$ {Number.parseInt(data.value)}</Text>
      </View>
      <View style={[Styles.stretch]}>
        <Text style={[Styles.lightText]}>Você {type === 'offer' ? 'recebe' : 'paga'} <Text style={Styles.semiBold}>R$ {data.value + data.value * data.fee / 10}</Text></Text>
        <View style={[Styles.stretch, { flexDirection: 'row' }]}>
          <Text style={[Styles.lightText, { flexGrow: 1 }]}>Em <Text style={Styles.semiBold}>{data.days} dias</Text></Text>
          <Button onPress={handleButtonPress} style={{ height: 35, justifyContent: 'center', alignSelf: 'flex-end', marginTop: -10 }} text={type === 'offer' ? 'cancelar' : 'eu quero!'} textColor='#fff' />
        </View>
      </View>
    </Card>
  )
}