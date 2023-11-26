import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoardJobEdit = ({ route }) => {
  const { jobId } = route.params;
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true); // Start in editing mode

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

  // State variables to hold edited values
  const [editedTitle, setEditedTitle] = useState(jobDetails.title);
  const [editedContent, setEditedContent] = useState(jobDetails.content);
  const [editedCompanyName, setEditedCompanyName] = useState(jobDetails.companyInfo.companyName);
  const [editedIndustry, setEditedIndustry] = useState(jobDetails.companyInfo.industry);
  const [editedBusinessType, setEditedBusinessType] = useState(jobDetails.companyInfo.businessType);
  const [editedEstablishmentDate, setEditedEstablishmentDate] = useState(jobDetails.companyInfo.establishmentDate);
  const [editedEmployeeCount, setEditedEmployeeCount] = useState(jobDetails.companyInfo.employeeCount);
  const [editedCEO, setEditedCEO] = useState(jobDetails.companyInfo.CEO);

  const handleCancelPress = () => {
    // Navigate back to the detail screen without saving changes
    setIsEditing(false);
    navigation.goBack();
  };

  const handleSavePress = () => {
    // Handle the logic to save the edited content (e.g., send to the server)
    // For now, simply log the edited content
    console.log('Edited Title:', editedTitle);
    console.log('Edited Content:', editedContent);
    console.log('Edited Company Name:', editedCompanyName);
    console.log('Edited Industry:', editedIndustry);
    console.log('Edited Business Type:', editedBusinessType);
    console.log('Edited Establishment Date:', editedEstablishmentDate);
    console.log('Edited Employee Count:', editedEmployeeCount);
    console.log('Edited CEO:', editedCEO);

    // Navigate back to the detail screen with the updated content
    setIsEditing(false);
    navigation.goBack();
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <>
          <View style={styles.editableContent}>
            <Text style={styles.label}>제목</Text>
            <TextInput
              style={styles.input}
              placeholder="제목을 입력하세요"
              value={editedTitle}
              onChangeText={(text) => setEditedTitle(text)}
            />
          </View>
          <View style={styles.editableContent}>
            <Text style={styles.label}>내용</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="내용을 입력하세요"
              value={editedContent}
              onChangeText={(text) => setEditedContent(text)}
            />
          </View>
          <View style={styles.editableContent}>
            <Text style={styles.label}>기업명</Text>
            <TextInput
              style={styles.input}
              placeholder="기업명을 입력하세요"
              value={editedCompanyName}
              onChangeText={(text) => setEditedCompanyName(text)}
            />
          </View>
          <View style={styles.editableContent}>
            <Text style={styles.label}>업종</Text>
            <TextInput
              style={styles.input}
              placeholder="업종을 입력하세요"
              value={editedIndustry}
              onChangeText={(text) => setEditedIndustry(text)}
            />
          </View>
          <View style={styles.editableContent}>
            <Text style={styles.label}>사업내용</Text>
            <TextInput
              style={styles.input}
              placeholder="사업내용을 입력하세요"
              value={editedBusinessType}
              onChangeText={(text) => setEditedBusinessType(text)}
            />
          </View>
          <View style={styles.editableContent}>
            <Text style={styles.label}>설립일</Text>
            <TextInput
              style={styles.input}
              placeholder="설립일을 입력하세요"
              value={editedEstablishmentDate}
              onChangeText={(text) => setEditedEstablishmentDate(text)}
            />
          </View>
          <View style={styles.editableContent}>
            <Text style={styles.label}>사원수</Text>
            <TextInput
              style={styles.input}
              placeholder="사원수를 입력하세요"
              value={editedEmployeeCount}
              onChangeText={(text) => setEditedEmployeeCount(text)}
            />
          </View>
          <View style={styles.editableContent}>
            <Text style={styles.label}>대표자명</Text>
            <TextInput
              style={styles.input}
              placeholder="대표자명을 입력하세요"
              value={editedCEO}
              onChangeText={(text) => setEditedCEO(text)}
            />
          </View>
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.title}>{jobDetails.title}</Text>
          {/* ... Existing info rendering ... */}
          <Text style={styles.content}>{jobDetails.content}</Text>
          <Text style={styles.title}>기업정보</Text>
          {/* ... Existing company info rendering ... */}
        </>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boardTitle}>
        <TouchableOpacity style={styles.button} onPress={handleSavePress}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>취업 관련 게시판</Text>
        <TouchableOpacity style={styles.button} onPress={handleCancelPress}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boardViewWrap}>
        <View style={styles.boardView}>{renderContent()}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'gray',
    padding: 30,
  },
  boardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'blue',
  },
  boardViewWrap: {},
  boardView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    marginBottom: 20,
  },
  editableContent: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    paddingVertical: 5,
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonText: {
    color: 'blue',
  },
});

export default BoardJobEdit;
