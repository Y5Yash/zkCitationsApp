import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ReclaimScholar} from '@reclaimprotocol/reclaim-react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView style={backgroundStyle.container}>
      <ReclaimScholar
        title="Google Scholar Citations"
        subTitle="Prove your citations count"
        cta="Prove"
        onSuccess={proofs => {
          /*do something*/
          console.log('proofs', proofs);
        }}
        onFail={e => {
          /*do something*/
          console.log('Error', e);
        }}
      />
    </SafeAreaView>
  );
}

export default App;
