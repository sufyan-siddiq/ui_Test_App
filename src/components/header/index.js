import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import IconB from 'react-native-vector-icons/Ionicons';
import IconC from 'react-native-vector-icons/AntDesign';

const Header = ({back, search, menu, screenName}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.Container}>
        <View style={styles.rowAlign}>
          {menu ? (
            <TouchableOpacity>
              <Icon
                name="menu"
                size={20}
                color="black"
                style={{fontFamily: 'FontAwesome'}}
              />
            </TouchableOpacity>
          ) : null}
          {back ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconB
                name="ios-chevron-back-outline"
                size={20}
                color="black"
                style={{fontFamily: 'FontAwesome'}}
              />
            </TouchableOpacity>
          ) : null}
          <Text style={[styles.sectiontxt]}>
            {screenName ? screenName : ''}
          </Text>
          {search ? (
            <TouchableOpacity>
              <IconC
                name="search1"
                size={20}
                color="black"
                style={{fontFamily: 'FontAwesome'}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  rowAlign: {
    widthL: '100%',
    padding: 20,
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
});

export default Header;
