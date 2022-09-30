import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './assets/api/req';
import { Home } from './src/pages/Home';
import { Movies } from './src/pages/Movies';

export default function App() {

  return (
    <>
    <Movies/>
    </>
    )
  }