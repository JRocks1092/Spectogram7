import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Picker } from '@react-native-community/picker';


import firebase from 'firebase';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      image: require('../assets/image_1.jpg'),
      dropdownHeight: 170,
      caption: '',
      theme: false
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    let theme;
    await firebase.database().ref('/users/' + firebase.auth().currentUser.uid).on("value", function (snapshot) {
      theme = snapshot.val().current_theme;
    });

    this.setState({
      theme: theme === "light" ? false : true,
    });

    console.log(this.state.theme)
  }

  render() {
    return (  
      <View style={this.state.theme ? styles.container : styles.containerDark}>
        <ScrollView>
          <View style = {{ width:120, backgroundColor:'black' }}>
            <Image source={require("../assets/logo.png")} style={{ position: 'relative', width: 100, height: 100, marginLeft: 10, marginTop: 10 }} />
          </View>
          <Text style={this.state.theme ? styles.heading : styles.headingDark}>New Post</Text>
          <Image source={this.state.image} style={styles.image} />
          <View style={this.state.theme ? styles.subContainer : styles.subContainerDark}>
            <Picker
              itemStyle={this.state.theme ? styles.pickerItem : styles.pickerItemDark}
              selectedValue={this.state.image}
              style={this.state.theme ? styles.picker : styles.pickerDark}
              onValueChange={(value) => this.setState({ image: value })}>
              <Picker.Item label="Choose Image" />
              <Picker.Item
                label="Image1"
                value={require('../assets/image_1.jpg')}
              />
              <Picker.Item
                label="Image2"
                value={require('../assets/image_2.jpg')}
              />
              <Picker.Item
                label="Image3"
                value={require('../assets/image_3.jpg')}
              />
              <Picker.Item
                label="Image4"
                value={require('../assets/image_4.jpg')}
              />
              <Picker.Item
                label="Image5"
                value={require('../assets/image_5.jpg')}
              />
              <Picker.Item
                label="Image6"
                value={require('../assets/image_6.jpg')}
              />
              <Picker.Item
                label="Image7"
                value={require('../assets/image_7.jpg')}
              />
            </Picker>

          </View>
          <TextInput placeholderTextColor="#aaa" style={this.state.theme ? styles.textInput : styles.textInputDark} placeholder='Caption' value={this.state.caption} onChangeText={(text) => this.setState({ caption: text })} numberOfLines={2} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    alignSelf: 'center',
    height: 70,
    marginTop: 50,
    width: '100%'
  },

  touchableOpacity: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,
  },

  heading: {
    color: '#fff',
    marginLeft: 120,
    marginTop: 30,
    position: 'absolute',
    fontSize: 40,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    height: 70,
    borderColor: 'white',
    color: 'white',
    width: '100%',
    marginTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },

  bg: {
    flex: 1,
    resizeMode: 'cover',
  },

  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'black'
  },

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },

  picker: {
    backgroundColor: 'black',
    color: "white",
    textAlign: 'center'
  },

  pickerItem: {
    backgroundColor: 'black',
    color: "white",
    textAlign: 'center',
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },



  containerDark: {
    backgroundColor: '#fff',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subContainerDark: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
    alignSelf: 'center',
    height: 70,
    marginTop: 50,
    width: '100%'
  },

  touchableOpacityDark: {
    backgroundColor: '#000',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,
  },

  headingDark: {
    color: '#000',
    marginLeft: 120,
    marginTop: 30,
    position: 'absolute',
    fontSize: 40,
  },

  textInputDark: {
    borderWidth: 1,
    borderRadius: 20,
    height: 70,
    borderColor: '#000',
    color: '#000',
    width: '100%',
    marginTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },

  bgDark: {
    flex: 1,
    resizeMode: 'cover',
  },

  imageDark: {
    width: 300,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff'
  },

  textDark: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  pickerDark: {
    backgroundColor: '#fff',
    color: "#000",
    textAlign: 'center'
  },

  pickerItemDark: {
    backgroundColor: '#fff',
    color: "#000",
    textAlign: 'center',
  },

});