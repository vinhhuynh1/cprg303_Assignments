import MainLayout from "../layouts/MainLayout";
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';

export default function AboutScreen({navigation}) {
    return(
        <MainLayout>
            <SafeAreaView>
                <Text>Contact Us</Text>
                <Text>Leave us a Message!</Text>

                <Button title="Submit" />            

                <Button title="Go to home" onPress={()=>navigation.navigate('Home;')} />
            </SafeAreaView>
        </MainLayout>
    );
}