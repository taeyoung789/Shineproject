//BoardJobDetail.js
// Import necessary dependencies
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoardJobDetail = ({ route }) => {
  // Get the job details from the route params
  const { jobId } = route.params;

  const navigation = useNavigation();

  // Dummy data for job details (replace with actual data retrieval logic)
  const jobDetails = {
    id: 1,
    title: '구인합니다.',
    writer: '무야호',
    date: '2021.1.16',
    count: 33,
    content: `
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
      글 내용이 들어갑니다
    `,
    companyInfo: {
      companyName: '기업명',
      industry: '업종',
      businessType: '사업내용',
      establishmentDate: '2023.11.12',
      employeeCount: '00명',
      CEO: 'CEO',
    },
  };

  const handleEditPress = () => {
    // Navigate to the edit screen (BoardJobEdit)
    navigation.navigate('BoardJobEdit', {
      screen: 'BoardJobEdit',
      params: { jobId },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>

        <View style={styles.boardTitle}>
            <TouchableOpacity onPress={handleEditPress}>
              <Text style={styles.buttonText}>수정</Text>
            </TouchableOpacity>
            
            <View>
              <Text style={styles.titleText}>취업 관련 게시판</Text>
              <Text style={styles.subtitleText}>구인 관련글 게시</Text>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('BoardJob')}>
              <Text style={styles.buttonText}>목록</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.boardViewWrap}>
        
          <View style={styles.boardView}>
            
            <Text style={styles.title}>{jobDetails.title}</Text>

            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>번호</Text>
                <Text style={styles.infoValue}>{jobDetails.id}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>글쓴이</Text>
                <Text style={styles.infoValue}>{jobDetails.writer}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>작성일</Text>
                <Text style={styles.infoValue}>{jobDetails.date}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>조회</Text>
                <Text style={styles.infoValue}>{jobDetails.count}</Text>
              </View>
            </View>

            <Text style={styles.content}>{jobDetails.content}</Text>

            <Text style={styles.title}>기업정보</Text>

              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>기업명</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.companyName}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>업종</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.industry}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>사업내용</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.businessType}</Text>
              </View>
            
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>설립일</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.establishmentDate}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>사원수</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.employeeCount}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>대표자명</Text>
                <Text style={styles.infoValue}>{jobDetails.companyInfo.CEO}</Text>
              </View>
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'gray',
    paddingBottom: 30,
    paddingHorizontal: 20
  },
  boardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingTop: 20
  },

  titleText: {
    fontSize: 24,
    paddingBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: 'black',
  },
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
    marginBottom: 5,
    paddingVertical: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginLeft: 10,
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
});

export default BoardJobDetail;
