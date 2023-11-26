import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const BoardHobby = () => {
  const hobbyData = [
    { id: 1, title: '밴드 동아리 구합니다', writer: '김이름', date: '2021.1.15', count: 33 },
    // Add more data as needed
  ];

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BoardHobbyView', { hobbyId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
        <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
        <Text style={styles.cardInfoText}>조회: {item.count}</Text>
      </TouchableOpacity>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.boardTitle}>
        <Text style={styles.titleText}>자유게시판</Text>
        <Text style={styles.subtitleText}>동아리, 동호회 홍보글</Text>
      </View>
      <FlatList
        data={hobbyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BoardHobbyWrite')}>
          <Text style={styles.buttonText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  boardTitle: {
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
  },
  card: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoText: {
    color: 'gray',
  },
  buttonWrap: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default BoardHobby;
