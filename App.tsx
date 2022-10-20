import React from "react";
import {View, Text} from 'react-native'
import colors from './src/theme/colors'
import fonts from './src/theme/fonts'
import  Icon  from "react-native-vector-icons/Entypo";



const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xlg}}> Hello World!</Text>
      <Icon name="flower" size={fonts.size.xlg} color={colors.primary} />
      
      
    </View>
  )
}

export default App