import React from 'react';
import {useState} from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';



export default function App() {

  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [bmi, setbmi] = useState(0);
  const [health, setHealth] = useState("BMI");
  const [weigh, setWeigh] = useState("Kilogram");
  const [heigh, setHeigh] = useState("Meter");
  const [color, setColor] = useState ("gray");


function test() {
    if (weigh === "Kilogram") {
       setWeigh("Pound")
       setHeigh("Inch")
      }
    }

function test1() {
      if (weigh === "Pound") {
         setWeigh("Kilogram")
         setHeigh("Meter")
        }
      }

      function convertSomething () {
        let height1 = (height) * (height);
        let sem_us_res = weight / height1;
        let us_res = sem_us_res * 703;
    
      if (weigh === "Kilogram") {
        setbmi (sem_us_res.toFixed(1));
      }
      else {
        setbmi (us_res.toFixed(1));
      }
      }

      function bmi_result() {
        if (bmi < 18.5) {
          setHealth ('Underweight')
          setColor ('yellow')
        } else if (bmi >= 18.5 && bmi < 25) {
          setHealth('Normal Weight')
          setColor("green")
        } else if (bmi >= 25 && bmi < 30) {
          setHealth('Overweight')
          setColor("orange")
        } else if ((bmi > 30)){
          setHealth('Obese')
          setColor("red")
        }
        }
      
    function callBoth() {
      convertSomething();
      bmi_result();
    }
    

  return (
    <View>
      <Text style={style.fontText}>BMI Calculator</Text>
    <View style={style.flex}>
      <View style={style.button_right}>
      <Button onPress={() => test1()}title="Metric"></Button>
      </View>
      <View style={style.button_left}>
      <Button onPress={() => test()}title="US unit"></Button>
      </View>
      </View>
      <View style={style.flex1}>
      <View style={style.textInput_left}>
      <Text style={style.font}>Weight</Text>
      <Text style={style.font}>Height</Text>
      </View>
      <View>
      <TextInput onChangeText={(text) => {
        setweight(parseFloat(text)); }}placeholder={weigh} keyboardType="numeric" style={style.input}/>
      <TextInput onChangeText={(text) => {
        setheight(parseFloat(text)); }}placeholder={heigh} keyboardType="numeric" style={style.input1}/>
      <Button onPress = { () => {callBoth()} }title="CONVERT"></Button>
      </View>
      </View>
      <View style={style.flex_result}>
        <View style={style.result_left}>
        <Text>Your BMI:</Text>
      </View>
      <View style={{flex: 2,
    height: "100%",
    width: "100%",
    marginRight: 10,
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "center"}}>
        <Text> {bmi} </Text>
        <Text> {health} </Text>
      </View>
      </View> 

      <View style={style.chart}>
      <View style={style.chart1}>
        <Text style={style.text_chart}>Underweight</Text>
        </View>
        <View style={style.chart2}>
        <Text style={style.text_chart}>Normal Weight</Text>
        </View>
        <View style={style.chart3}>
        <Text style={style.text_chart}>Overweight</Text>
        </View>
        <View style={style.chart4}>
        <Text style={style.text_chart}>Obese</Text>
      
      </View>
      </View>

    </View>
    
  );
}

const style = StyleSheet.create ({
  fontText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 40,
    alignSelf: "center"
  },
  font: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 30
  },
  flex1: {
    padding: 50,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "gray"
  },
  input: {
    width: 200,
    height: 30,
    marginTop: 10,
    paddingHorizontal:10,
    paddingVertical:0,
    borderWidth: 1,
  },
  input1: {
    width: 200,
    height: 30,
    marginTop: 30,
    paddingHorizontal:10,
    paddingVertical:0,
    borderWidth: 1,
  },
  input2: {
    width: 200,
    height: 30,
    marginTop: 5,
    marginBottom: 30,
    paddingHorizontal:10,
    paddingVertical:0,
    borderWidth: 1,
  },
  button_right: {
    marginRight: 20,
    width: 100
 },
  button_left: {
    width: 100
 },
  convert: {
    marginTop: 100 
  },
  textInput_left: {
    marginRight: 50,
    paddingBottom: 70,
    alignSelf: "center"
 },
  textInput_right: {
  
  },
  result_left: {
    flex: 1,
    marginRight: 20,
    marginLeft: 10,
    height: "100%",
    width: "100%",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  },
  result_right: {
    flex: 2,
    height: "100%",
    width: "100%",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  flex_result: {
    flexDirection: "row",
    height: 60
  },
  chart: {
    flexDirection: "row",
    paddingTop: 25
 },
  chart1: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    height: 100

  },
  chart2: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  chart3: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center"
  },
  chart4: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  text_chart: {
    fontWeight: "bold"
  }
});
