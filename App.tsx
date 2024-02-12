import { StatusBar, StyleSheet, Text, Touchable , TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'



const App = () => {
  const [colors , setColors] = useState('#ffffff');
  return (
    <>
   <StatusBar backgroundColor={colors} />
   <View style={styles.conatiner}>
    <TouchableOpacity onPress={() => setColors('black')}>
      <View style={styles.pressme}>
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
    alignItems: 'center'
  },
  pressme: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5
  },
  stylebtn: {
    color: 'white',
    fontSize: 20
  }



})