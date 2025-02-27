import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  MainScreen: undefined;
  SkillScreen: undefined;
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

const MainScreen = ({ navigation }: { navigation: MainScreenNavigationProp }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: '' }} style={styles.profileImage} />
      <Text style={styles.name}>Tiago</Text>
      <View style={styles.linksContainer}>
        <Text style={styles.linkText} onPress={() => console.log('GitHub')}>GitHub</Text>
        <Text style={styles.linkText} onPress={() => console.log('LinkedIn')}>LinkedIn</Text>
        <Text style={styles.linkText} onPress={() => console.log('Email')}>Email</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SkillScreen')}>
        <Text style={styles.buttonText}>Ver Habilidades</Text>
      </TouchableOpacity>
    </View>
  );
};

const skills = [
  { id: '1', name: 'HTML', level: 'Intermediário' },
  { id: '2', name: 'React Native', level: 'Básico' },
  { id: '3', name: 'CSS', level: 'Intermediário' },
  { id: '4', name: 'Python', level: 'Básico' }
];

const SkillScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: '' }} style={styles.profileImage} />
      <Text style={styles.name}>Tiago</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>{item.name} - {item.level}</Text>
          </View>
        )}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Perfil' }} />
        <Stack.Screen name="SkillScreen" component={SkillScreen} options={{ title: 'Habilidades' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linksContainer: {
    marginBottom: 20,
  },
  linkText: {
    color: 'blue',
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  skillItem: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  skillText: {
    fontSize: 18,
  },
});
