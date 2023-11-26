import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const BoardJob = () => {
  const jobData = [
    { id: 1, title: '구인합니다.', writer: '김이름', date: '2021.1.15', count: 33 },
    // Add more data as needed
  ];

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoardJobDetail', { jobId: item.id })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>글쓴이: {item.writer}</Text>
          <Text style={styles.cardInfoText}>작성일: {item.date}</Text>
          <Text style={styles.cardInfoText}>조회: {item.count}</Text>
        </View>
      </TouchableOpacity>
    </Card>
    
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        
        <View style={styles.boardTitle}>
          <Text style={styles.titleText}>취업 관련 게시판</Text>
          <Text style={styles.subtitleText}>구인 관련글 게시</Text>
        </View>
        <FlatList
          data={jobData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BoardJobWrite')}
          >
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
    backgroundColor: 'gray',
    padding: 20,
  },
  boardTitle: {
    alignItems: 'center',
    marginBottom: 20,
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
    marginBottom: 10,
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default BoardJob;
