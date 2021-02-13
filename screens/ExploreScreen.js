import React from 'react';
import {ScrollView, View, Text, Button, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

const ExploreScreen = () => {
const nuevaUrl = "https://www.youtube.com/embed/I3zLT0g6oU8?controls=1&autoplay=1&mute=1&showinfo=0&fullscreen=1";

  return (
    <>
    <View style={styles.container}>
      <Text>Videos</Text>
      <Button
        title="Ver más videos"
        onPress={() => alert('Activar list desde FIREBASE!')}
      />
    </View>

    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}>
    
      <WebView
      onLoadProgress={({ nativeEvent }) => {
        this.loadingProgress = nativeEvent.progress;
      }}
      mediaPlaybackRequiresUserAction={true}
      style={{ height:420, width:740,alignSelf:"center",alignContent:"center"}}
      source={{uri: 'https://www.youtube.com/embed/I3zLT0g6oU8?controls=1&autoplay=1&mute=0&fullscreen=1' }}
    />

    <View style={{backgroundColor:'#EFF93C', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 10, paddingLeft: 50,}}>
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
      <Text style={{color:'black', fontSize: 26,}}>Francisca Martinez </Text>
        <Text style={styles.sectionDescription}>
          Productora de <Text style={styles.highlight}>Reset TV</Text> les presenta una nueva APP para equipos Android.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>NUEVACUMBRE.CL</Text>
      </View>
    </View>
</View>
  </ScrollView>
  </>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'},
});
