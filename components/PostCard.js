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
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import IonIcons from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      lightTheme:false
    }
  }

  componentDidMount() {
    this.setData();
  }
  setData() {
    this.setState({ lightTheme:this.props.lightTheme })
  }
  
  render() {
    return (
      <View style={ this.state.lightTheme?styles.containerLight:styles.container}>
        <TouchableOpacity onPress = {()=>this.props.navigation.navigate('PostScreen', { data:this.props.cardData, lightTheme:this.props.lightTheme })}>
          <Image source={require('../assets/image_3.jpg')} style={styles.image} />

          <Text style={this.state.lightTheme?styles.textLight:styles.text}>{this.props.cardData.authorName}</Text> 
          <Text style={this.state.lightTheme?styles.textLight:styles.text}>{this.props.cardData.caption}</Text>
          <TouchableOpacity style={styles.touchableOpacity}>
            <IonIcons name={"heart"} color={"white"} size={RFValue(30)}>
              <Text>12K</Text>
            </IonIcons>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    borderRadius: 20,
  },

  containerLight: {
    backgroundColor: '#eee',
    borderRadius: 20,
  },

  touchableOpacity: {
    borderRadius: 20,
    backgroundColor: 'red',
    width: 200,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  heading: {
    color: '#661111',
    alignSelf: 'center',
    fontSize: 40,

  },

  textInput: {
    borderWidth: 3,
    borderRadius: 20,
    width: 200,
    marginTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },

  bg: {
    flex: 1,
    resizeMode: 'cover',
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },

  textLight: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },


  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
