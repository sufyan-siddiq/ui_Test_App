import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import allBooks from '../../arrays';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';
const AllBooks = () => {
  const navigate = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate.navigate('bookDescription')}
        style={{
          width: 190,
          marginTop: index == 2 ? 10 : index == 3 ? -30 : 10,
        }}>
        <Image
          style={{
            height: index == 0 ? 290 : index == 3 ? 280 : 250,
            width: '95%',
            borderRadius: 20,
          }}
          source={item}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.Container}>
        <Header menu search screenName={'All Books'} />
        <View
          style={{
            width: '100%',
            padding: 10,
          }}>
          <FlatList
            data={allBooks}
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle: {
    marginTop: 22,
    paddingHorizontal: 24,
  },
  sectiontxt: {
    color: '#022a5b',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AllBooks;
