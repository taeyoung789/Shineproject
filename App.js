// 11.28일자 수정 - Log-in, out 상황별 기능제한 추가
// App.js - log out 상태, 게시판 접근시 바로 로그인 화면으로 이동
//Applogin.js - log in 상태, 게시판 접근 정상화
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// import for Applogin
import Applogin from './Applogin';

//import for Education
import Category1Screen from './Education_Category1';
import Category2Screen from './Education_Category2';
import Category3Screen from './Education_Category3';
import Category4Screen from './Education_Category4';
import Education_Write1 from './Education_Write1';
import Education_edit1 from './Education_edit1';
import Education_view1 from './Education_view1';
import Education_Write2 from './Education_Write2';
import Education_edit2 from './Education_edit2';
import Education_view2 from './Education_view2';
import Education_Write3 from './Education_Write3';
import Education_edit3 from './Education_edit3';
import Education_view3 from './Education_view3';
import Education_Write4 from './Education_Write4';
import Education_edit4 from './Education_edit4';
import Education_view4 from './Education_view4';

// import for Job Board
import BoardJob from './Board_Job';
import BoardJobDetail from './BoardJobDetail';
import BoardJobEdit from './BoardJobEdit';
import BoardJobWrite from './BoardJobWrite';

// import for Hobby Board
import BoardHobby from './BoardHobby';
import BoardHobbyView from './BoardHobbyView';
import BoardHobbyEdit from './BoardHobbyEdit';
import BoardHobbyWrite from './BoardHobbyWrite';

// import for Sign-in, Sign-up
import Signin from './Signin';
import Signup from './Signup';
import Signupuser from './Signupuser';
import Signupenterprise from './Signupenterprise';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
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
          <Text>Log-in</Text>
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
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text>Category1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text>Category2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text>Category3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
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
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text>Hobby</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Applogin" component={Applogin}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Signupenterprise" component={Signupenterprise}/>
        <Stack.Screen name="Signupuser" component={Signupuser}/>
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="BoardHobby" component={BoardHobby} />
        <Stack.Screen name='BoardHobbyView' component={BoardHobbyView}/>
        <Stack.Screen name='BoardHobbyEdit' component={BoardHobbyEdit}/>
        <Stack.Screen name='BoardHobbyWrite' component={BoardHobbyWrite}/>
        <Stack.Screen name="BoardJob" component={BoardJob} />
        <Stack.Screen name="BoardJobDetail" component={BoardJobDetail} />
        <Stack.Screen name="BoardJobEdit" component={BoardJobEdit} />
        <Stack.Screen name="BoardJobWrite" component={BoardJobWrite} />
        <Stack.Screen name="Category1" component={Category1Screen} />
        <Stack.Screen name='Category2' component={Category2Screen}/>
        <Stack.Screen name='Category3' component={Category3Screen}/>
        <Stack.Screen name='Category4' component={Category4Screen}/>
        <Stack.Screen name='Education_Write1' component={Education_Write1}/>
        <Stack.Screen name='Education_view1' component={Education_view1}/>
        <Stack.Screen name='Education_edit1' component={Education_edit1}/>
        <Stack.Screen name='Education_Write2' component={Education_Write2}/>
        <Stack.Screen name='Education_view2' component={Education_view2}/>
        <Stack.Screen name='Education_edit2' component={Education_edit2}/>
        <Stack.Screen name='Education_Write3' component={Education_Write3}/>
        <Stack.Screen name='Education_view3' component={Education_view3}/>
        <Stack.Screen name='Education_edit3' component={Education_edit3}/>
        <Stack.Screen name='Education_Write4' component={Education_Write4}/>
        <Stack.Screen name='Education_view4' component={Education_view4}/>
        <Stack.Screen name='Education_edit4' component={Education_edit4}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
