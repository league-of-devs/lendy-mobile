import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../Styles'

import { offers, requests } from '../fakeData.json'
import Card from '../Components/Card'
import { ScrollView } from 'react-native-gesture-handler'
import Tag from '../Components/Tag'
import TextInput from '../Components/TextInput'
import Colors from '../Styles/colors'

export default function Home() {

  return (
    <View style={[Styles.container, { paddingTop: Styles.container.paddingTop + 15 }]}>
      <View style={{ paddingHorizontal: 10 }}>
        <TextInput borderColor={Colors.cyan} placeholder='Pesquisar por ofertas...' placeholderColor='#cccccc' color='#000' style={{ backgroundColor: '#eee', elevation: 5 }}/>
      </View>
      <ScrollView>
        {offers.map((offer, i) => (
          <Card key={i}>
            <Text style={Styles.cardTitle}>R$ {Number.parseInt(offer.min_value)} - {Number.parseInt(offer.max_value)}</Text>
            <View>
              <Text style={[Styles.text]}>
                {offer.from.name}
                {' - '}
                <Text style={[Styles.lightText]}>{offer.from.addr_city}, {offer.from.addr_state}</Text>
              </Text>
              <Text numberOfLines={3} style={Styles.lightText}>{offer.description}</Text>
              <View style={Styles.tagsContainer}>
                {offer.tags.map((text, i) => (
                  <Tag text={text} key={i}/>
                ))}
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  )
}