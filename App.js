import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextInput from './components/TextInput'
import { Provider } from "react-redux";
import store from './components/store/index'
import Routes from './Routes'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Routes/>
        </Provider>
    )
  }
}
// import React from 'react';
// import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

// import { DangerZone } from 'expo';
// const { Lottie } = DangerZone;

// import { API_KEY } from './utils/WeatherAPIKey';

// import Weather from './components/Weather';

// export default class App extends React.Component {
//   state = {
//     isLoading: true,
//     temperature: 0,
//     weatherCondition: null,
//     error: null,
//     city:'',
//     country:''
//   };

//   handleNew(){
//     this.setState({
//       isLoading: true,
//       temperature: 0,
//       weatherCondition: null,
//       error: null,
//       city:'',
//       country:''
//     })
//   }
//   fetchWeahter() {
//     if(this.state.city&&this.state.country){
//       fetch(
//         `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}
//         ,${this.state.country}&appid=${API_KEY}&units=metric`
//       )
//         .then(res => res.json())
//         .then(json => {
//           // console.log(json);
//           this.setState({
//             temperature: json.main.temp,
//             weatherCondition: json.weather[0].main,
//             isLoading: false
//           });
//         });
//     }
//   }
  
//   render() {
//     const { isLoading, weatherCondition, temperature } = this.state;
//     return (
//       <View style={styles.container}>
//         {isLoading ? (
//           <View style={styles.loadingContainer}>
//           <Text style={styles.heading}>WEATHER APP</Text>
//           <TextInput
//           autoFocus={true}
//           placeholder="Enter City"
//           style={styles.textInput}
//           underlineColorAndroid='transparent'
//           onChangeText={text=>{
//             this.setState({
//               city:text
//             })
//           }}
//           />
//           <TextInput
//           placeholder="Enter Country"
//           style={styles.textInput}
//           underlineColorAndroid='transparent'
//           onChangeText={text=>{
//             this.setState({
//               country:text
//             })
//           }}
//           />
//             <Button color={'rgb(180, 154, 35)'} title='Update Weather'
//             onPress={()=>this.fetchWeahter()}
//             />
            
//           </View>
//         ) : (
//           <Weather handleNew={this.handleNew.bind(this)} weather={weatherCondition} temperature={temperature} />
//         )}
       
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFFDE4'
//   },
//   loadingText: {
//     fontSize: 30
//   },
//   heading:{
//     fontSize:45,
//     color:'rgb(218, 205, 33)',
//     fontWeight:'bold',
//     margin:25,
//     fontStyle:'italic'
//   },
//   textInput:{
//     width:300,
//     color:'rgb(206, 176, 41)',
//     fontSize:18,
//     marginBottom:10,
//     borderColor:'rgb(180, 154, 35)',
//     borderWidth:1,
//     borderRadius:15,
//     textAlign:'center',
//     fontWeight:'bold',
//     fontStyle:'italic'
//   }
// });
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import HomeComponent from './components/HomeComponent'
// import InfoComponent from './components/InfoComponent'
// import SettingsComponent from './components/SettingsComponent'
// import CloudComponent from './components/CloudComponent'
// import { TabNavigator,createBottomTabNavigator } from "react-navigation";
// import { Home,Info,Settings,Cloud } from "./ScreenNames";
// let routeConfigs={
//   Home:{
//     screen:HomeComponent
//   },
//   Info:{
//     screen:InfoComponent
//   },
//   Settings:{
//     screen:SettingsComponent
//   },
//   Cloud:{
//     screen:CloudComponent
//   }
// }
// let tabNavigatorConfigs={
//   tabBarPosition:'bottom',
//   animationEnabled:true,
//   swipeEnabled:true,
//   tabBarOptions:{
//     activeBackgroundColor:'green'
//   }
// }

// // const App = createBottomTabNavigator(routeConfigs,{
// //   tabBarOptions:{
// //     showLabel:true,scrollEnabled:true,activeBackgroundColor:'aqua'
// //   }
// // })
// const App = TabNavigator(routeConfigs,tabNavigatorConfigs)

// export default App