import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component{
//   render(){
//     return (
//       <LinearGradient colors={["#00C6FB","#005BEA"]}
//                       style={styles.container}
//       >
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy"/>
//           <Text style={styles.temp}>35°</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Raining like a T.T</Text>
//           <Text style={styles.subtitle}>For more info look ouside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

const weatherCases = {
  Rain: {
    colors: ["#00C6FB","#005BEA"],
    title: "Raing like a T.T",
    subtitle: "For more info look ouside",
    icon: 'ios-rainy'
  },
  Clear:{
    colors: ["#FEF253","#FF7300"],
    title: "Sunny is good",
    subtitle: "Go to a coffe shop",
    icon: 'ios-sunny'
  },
  Thunderstrom:{
    colors: ["#00ECBC","#007ADF"],
    title: "Thunder is scare",
    subtitle: "Actually, outside of the house",
    icon: 'ios-thunderstrom'
  },
  Clouds:{
    colors: ["#0702CC","#304352"],
    title: "Clouds",
    subtitle: "I know, It's good day to read a book",
    icon: 'ios-cloudy'
  },
  Snow:{
    colors: ["#7DE2FC","#8986E5"],
    title: "So cold",
    subtitle: "Do you want to bulid a snowman?",
    icon: 'ios-snow'
  },
  Drizzle:{
    colors: ["#89F7FE","#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain",
    icon: 'ios-rainy-outline'
  }
}

function Weather( {weatherName, temp} ){
  console.log(weatherName);
  return(
    <LinearGradient colors={weatherCases[weatherName].colors}
                    style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color:"white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft :25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color:"white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color:"white",
    marginBottom: 24
  }
});
