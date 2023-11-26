import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Education_view4 = ({ route }) => {
  const { Education_Id } = route.params;

  const Educationdetails = {
    id: 1,
    title: '교육 게시판',
    content: '교육 관련 게시판 입니다.',
    image: require('./assets/images/photo1.jpg'),
  };

  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate('Education_edit4', { Education_Id });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.EducationTitle}>
        <Text style={styles.titleText}>교육게시판</Text>
      </View>
      <View style={styles.boardView}>
        <Text style={styles.title}>{Educationdetails.title}</Text>
        <Image style={styles.image} source={Educationdetails.image} />
        <Text style={styles.content}>{Educationdetails.content}</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
           <Text style={styles.buttonText}>수정</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Category4')}>
           <Text style={styles.buttonText}>목록</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  boardTitle: {
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  boardView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 50,
    marginBottom: 30,
    borderRadius: 10,
  },
  content: {
    fontSize: 16,
    color: 'black',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Education_view4;