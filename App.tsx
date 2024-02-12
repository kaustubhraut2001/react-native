import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const [colors, setColors] = useState('#ffffff');
  const genreatecolor = () => {
    const hexrange = '0123456789ABCDEF';
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
      hexcolor += hexrange[Math.floor(Math.random() * 16)];
    }
    setColors(hexcolor);
  }
  return (
    <>
      <StatusBar backgroundColor={colors} />
      <View style={[styles.conatiner, { backgroundColor: colors }]} >
        <TouchableOpacity onPress={() => genreatecolor()}>
          <Text style={styles.shade}> Circle </Text>
          <View style={styles.pressme} >
            <Text style={styles.stylebtn}>Press Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>

  )
}

export default App

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  pressme: {

    backgroundColor: 'gray',

    padding: 10,
    borderRadius: 50
  },
  shade: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 20,
    marginBottom: 60,
    borderRadius: 150,
    
  },

  stylebtn: {
    color: 'white',
    fontSize: 20,

  }



})