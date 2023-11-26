import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const Applogin = ({ navigation }) => {
  const [showEducationSubMenu, setShowEducationSubMenu] = useState(false);
  const [showBoardSubMenu, setShowBoardSubMenu] = useState(false);

  const toggleEducationSubMenu = () => {
    setShowEducationSubMenu(!showEducationSubMenu);
    setShowBoardSubMenu(false);
  };

  const toggleBoardSubMenu = () => {
    setShowBoardSubMenu(!showBoardSubMenu);
    setShowEducationSubMenu(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Shine Factory</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Signin')}>
          <Text>Log-out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About')}>
          <Text>About</Text>
        </TouchableOpacity>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={toggleEducationSubMenu}>
            <Text>Education</Text>
          </TouchableOpacity>
          {showEducationSubMenu && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('Introduction')}>
                <Text>Introduction</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Category1')}>
                <Text>Category1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Category2')}>
                <Text>Category2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Category3')}>
                <Text>Category3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Category4')}>
                <Text>Category4</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={toggleBoardSubMenu}>
            <Text>Board</Text>
          </TouchableOpacity>
          {showBoardSubMenu && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('BoardHobby')}>
                <Text>Hobby</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('BoardJob')}>
                <Text>Job</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const AboutScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>About The Shine Factory</Text>
        <Text>"The Shine Factory is a cutting-edge educational institution dedicated to fostering expertise in the realm of the Fourth Industrial Revolution. At The Shine Factory, we illuminate the path to technological mastery, equipping individuals with the knowledge and skills essential for navigating the complexities of the modern era. Our commitment extends beyond conventional education, transcending boundaries to empower learners with a profound understanding of innovative technologies, including artificial intelligence, blockchain, and emerging digital trends.
  
  Guided by a vision of excellence, we strive to cultivate a dynamic learning environment where creativity flourishes, and intellectual curiosity is celebrated. Our curriculum is meticulously designed to bridge the gap between theory and practical application, ensuring that our students not only grasp theoretical concepts but also acquire hands-on experience in the latest technological advancements.
  
  In an era defined by rapid technological evolution, The Shine Factory stands as a beacon of enlightenment, propelling individuals toward a future where they are not just spectators but active contributors to the ever-changing landscape of the Fourth Industrial Revolution. Join us on a transformative journey where knowledge meets innovation, and together, we shape a brighter and more empowered tomorrow."</Text>
      </View>
    );
  };
  
  const EducationScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Education</Text>
      </View>
    );
  };
  
  const IntroductionScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Introduction</Text>
      </View>
    );
  };

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'gray',
      padding: 20,
    },
    title: {
      fontSize: 24,
      paddingBottom: 20,
      paddingTop: 20,
    },
    menu: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    menuItem: {
      padding: 10,
    },
    submenu: {
      marginLeft: 10,
      marginTop: 5,
    },
  });

  export default Applogin;