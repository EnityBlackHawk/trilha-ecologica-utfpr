import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
 } from 'react-native';

 import { useNavigation } from '@react-navigation/native';

 import * as Animatable from 'react-native-animatable';

export default function TelaCards() {
  const navigation = useNavigation();

  const abrirRotaCardFlora = () => {
    navigation.navigate('#');
  };

  const abrirRotaCardFauna = () => {
    navigation.navigate('#');
  };

  const abrirRotaBtnContinuar = () => {
    navigation.navigate('#');
  };

  return (
    <View style={styles.container}>

      <View style={styles.containerMenu}>
        <Image
          source={require('../assets/Menu_Sanduiche.png')}
          style={{width: '10%'}}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerTextoInicial}>
        <Text style={styles.textoInicial}>Cards</Text>
      </View>

      <View style={styles.containerCards}>
        <View style={styles.containerTxtImgFlora}>
          <View style={styles.containerTxtFlora}>
            <Text style={styles.textoFlora}>Flora</Text>
          </View>
          <TouchableOpacity onPress={abrirRotaCardFlora} style={styles.containerCardFlora}>
            <Animatable.Image
            animation="flipInY"
              source={require('../assets/Flora_Card_TrilhaEcologica.png')}
              style={{flex: 1, width: null, height: null, borderRadius: 25}}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTxtImgFauna}>
          <View style={styles.containerTxtFauna}>
            <Text style={styles.textoFauna}>Fauna</Text>
          </View>
          <TouchableOpacity onPress={abrirRotaCardFauna} style={styles.containerCardFauna}>
            <Animatable.Image
              delay={600}
              animation="flipInY"
              source={require('../assets/Fauna_Card_TrilhaEcologica.png')}
              style={{flex: 1, width: null, height: null, borderRadius: 25}}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={abrirRotaBtnContinuar} style={styles.button}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/Logo_Trilha_Ecologica.png')}
          style={{flex: 1, position: 'relative', top: '5%'}}
          resizeMode="contain"
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#AFD6C4'
  },
  containerMenu:{
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '5%',
    paddingTop: '5%'
  },
  containerTextoInicial:{
    flex: 0.1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: '5%'
  },
  textoInicial:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerCards:{
    flex: 0.5,
    flexDirection: "row"
  },
  containerTxtImgFlora:{
    flex: 0.5
  },
  containerTxtFlora:{
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%"
  },
  textoFlora:{
    fontSize: 15
  },
  containerCardFlora:{
    flex: 0.9,
    borderRadius: 25,
    marginTop: '5%',
    marginBottom: '40%',
    marginLeft: '8%',
    marginRight: '8%'
  },
  containerTxtImgFauna:{
    flex: 0.5
  },
  containerTxtFauna:{
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%"
  },
  textoFauna:{
    fontSize: 15
  },
  containerCardFauna:{
    flex: 0.9,
    borderRadius: 25,
    marginTop: '5%',
    marginBottom: '40%',
    marginLeft: '8%',
    marginRight: '8%'
  },
  containerButton:{
    flex: 0.1,
    justifyContent: "flex-start"
  },
  button:{
    backgroundColor: '#E2DD72',
    borderRadius: 16,
    width: '75%',
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: 'relative',
    bottom: '30%'
  },
  buttonText:{
    fontSize: 15
  },
  containerLogo:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingEnd: '5%',
    paddingBottom: '5%',
    paddingTop: '7%'
  }
})