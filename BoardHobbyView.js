import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoardHobbyView = ({ route }) => {
  const { hobbyId } = route.params;

  const navigation = useNavigation();

  const hobbyDetails = {
    id: 1,
    title: '밴드 동아리 구합니다.',
    writer: '무야호',
    date: '2021.1.16',
    count: 33,
    image: require('./assets/images/photo1.jpg'),
    content: 
      '밴드 동아리원을 모집합니다. 연습 시간은 매주 화, 목요일 오후 7시부터 9시까지입니다. 연락주세요!',
  };

  const handleEditPress = () => {
    navigation.navigate('BoardHobbyEdit', { hobbyId });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.boardTitle}>

          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.buttonText}>수정</Text>
          </TouchableOpacity>
        
          <View>
            <Text style={styles.titleText}>자유게시판</Text>
            <Text style={styles.subtitleText}>동아리, 동호회 홍보글</Text>
          </View>
          
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('BoardHobby')}>
            <Text style={styles.buttonText}>목록</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.boardViewWrap}>

          <View style={styles.boardView}>
            
            <Text style={styles.title}>{hobbyDetails.title}</Text>

            <View style={styles.info}>
              <View style={styles.infoItem}>
                <View>
                  <Text style={styles.infoLabel}>번호</Text>
                  <Text style={styles.infoValue}>{hobbyDetails.id}</Text>
                </View>

                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>글쓴이</Text>
                    <Text style={styles.infoValue}>{hobbyDetails.writer}</Text>
                  </View>

                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>작성일</Text>
                    <Text style={styles.infoValue}>{hobbyDetails.date}</Text>
                  </View>

                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>조회</Text>
                    <Text style={styles.infoValue}>{hobbyDetails.count}</Text>
                  </View>
                </View>
              
              <Text style={styles.content}>{hobbyDetails.content}</Text>
              <Image style={styles.image} source={hobbyDetails.image} />
              
            </View>
          </View>  
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
  },

  boardViewWrap: {},

  boardView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
    // padding: 10,
    // borderRadius: 10,
  },
  content: {
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  info: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
    // marginBottom: 5,
    paddingVertical: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginLeft: 10,
  },
});

export default BoardHobbyView;
