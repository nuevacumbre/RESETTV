import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Pantalla de inicio</Text>
      <Button
        title="Ir a la pantalla de detalles"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={{backgroundColor:'#EFF93C', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 10}}>
        <Text style={{color:'black', fontSize: 32, }}>RESET es una nueva señal de televisión abierta que cubre de Arica a Punta Arenas. Cuando hablamos de señal abierta no sólo nos referimos a la manera de acceder a los contenidos del medio - sin pagos y contratos previos, sólo con la antena del televisor - también hacemos referencia a un espacio abierto a la discusión de ideas, a la materialización de inquietudes audiovisuales y argumentativas que tienen cabida en un canal que viene a oxigenar la uniforme parrilla programática de otros canales, recuperando al público y a la masa crítica que ha dejado de ver televisión.</Text>
      </View>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
