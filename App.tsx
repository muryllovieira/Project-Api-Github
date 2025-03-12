import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { HomeTemplate } from './src/atomic/templates/HomeTemplate';
import { RepositoryTemplate } from './src/atomic/templates/RepositoryTemplate';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeTemplate />
      {/* <RepositoryTemplate/> */}
    </SafeAreaView>
  );
}
