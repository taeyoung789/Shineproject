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

const BoardHobbyEdit = ({ route }) => {
  const { hobbyId } = route.params;
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(true);

  const hobbyDetails = {
    id: 1,
    title: '밴드 동아리 구합니다',
    content: '밴드 동아리원을 모집합니다. 연습 시간은 매주 화, 목요일 오후 7시부터 9시까지입니다. 연락주세요!',
    image: 'https://example.com/band_image.jpg',
  };

  const [editedTitle, setEditedTitle] = useState(hobbyDetails.title);
  const [editedContent, setEditedContent] = useState(hobbyDetails.content);
  const [editedImage, setEditedImage] = useState(hobbyDetails.image);

  const handleCancelPress = () => {
    setIsEditing(false);
    navigation.goBack();
  };

  const handleSavePress = () => {
    console.log('Edited Title:', editedTitle);
    console.log('Edited Content:', editedContent);
    console.log('Edited Image:', editedImage);

    setIsEditing(false);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boardTitle}>
        <TouchableOpacity onPress={handleSavePress}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>자유게시판</Text>
        <TouchableOpacity onPress={handleCancelPress}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
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
        <Text style={styles.label}>이미지 URL</Text>
        <TextInput
          style={styles.input}
          placeholder="이미지 URL을 입력하세요"
          value={editedImage}
          onChangeText={(text) => setEditedImage(text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F0F0F0',
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
  buttonText: {
    color: 'blue',
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
});

export default BoardHobbyEdit;
