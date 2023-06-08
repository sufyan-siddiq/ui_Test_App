import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import ImageSource from '../../ImageSource';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import Header from '../../components/header';

const bookDescription = () => {
  const [more, setMore] = useState(
    'I failed the first quarter of a class in school, so I made a fake report card. I did this every quarter that year. I forgot that they mail home the end- year cards, and my mom got it before I could intercept...',
  );
  const [click, setClick] = useState();
  const moreHandler = () => {
    setClick(true);
    setMore(
      'I failed the first quarter of a class in school, so I made a fake report card. I did this every quarter that year. I forgot that they mail home the end- year cards, and my mom got it before I could  intercept I failed the first quarter of a class in school, so I made a fake report card. I did this every quarter that year. I forgot that they     mail home the end- year cards, and my mom got it before I could intercept',
    );
  };
  const naviation = useNavigation();
  return (
    <>
      <View style={styles.Container}>
        <Header back />
        <TouchableOpacity style={styles.sectionTitle}>
          <Text style={[styles.sectiontxtTitle]}>HOSTORY</Text>
        </TouchableOpacity>
        <Text style={styles.sectiontxt2}>
          Always forgive your enemies, nothing annoys.
        </Text>
        <View style={[styles.rowAlign, {marginTop: 10}]}>
          <View style={styles.rowDiv}>
            <Text style={[styles.sectiontxt, {color: 'gray'}]}>
              Published from{' '}
            </Text>
            <Text style={styles.sectiontxt}>istudio</Text>
          </View>
          <Text style={[styles.sectiontxt, {color: 'gray'}]}>23 Mar, 2019</Text>
        </View>
        <TouchableOpacity
          onPress={() => naviation.navigate('allBooks')}
          style={styles.imgSec}>
          <Image style={styles.img} source={ImageSource.img4} />
        </TouchableOpacity>
        <View style={styles.para}>
          <View style={[styles.rowDiv, {alignItems: 'center'}]}>
            <Text style={[styles.sectiontxt, {fontSize: 30, fontWeight: 500}]}>
              4.7{' '}
            </Text>
            <View style={styles.rowDiv}>
              <Icon
                name="star"
                size={15}
                color="gold"
                style={{fontFamily: 'FontAwesome'}}
              />
              <Icon
                name="star"
                size={15}
                color="gold"
                style={{fontFamily: 'FontAwesome'}}
              />
              <Icon
                name="star"
                size={15}
                color="gold"
                style={{fontFamily: 'FontAwesome'}}
              />

              <Icon
                name="star"
                size={15}
                color="gold"
                style={{fontFamily: 'FontAwesome'}}
              />

              <Icon
                name="star"
                size={15}
                color="lightgray"
                style={{fontFamily: 'FontAwesome'}}
              />
            </View>
          </View>
          <Text style={{color: 'gray'}}>892 Ratings on Google Play</Text>
          <View style={styles.rowDiv}>
            <Text style={[styles.sectiontxt, {marginTop: 10}]}>
              {more}
              {click ? null : (
                <Text style={[styles.sectiontxt]} onPress={moreHandler}>
                  Read more
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  rowDiv: {flexDirection: 'row'},
  para: {
    paddingHorizontal: 20,
  },
  rowAlign: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectiontxt: {
    color: '#022a5b',
  },
  sectiontxtTitle: {
    color: 'red',
    fontSize: 12,
    fontWeight: 500,
  },
  sectiontxt2: {
    marginTop: 10,
    color: '#022a5b',
    paddingHorizontal: 20,
    fontSize: 23,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  imgSec: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: '#F1F2F0',
    alignItems: 'flex-end',
  },
  img: {
    width: '85%',
    height: 220,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
});

export default bookDescription;
