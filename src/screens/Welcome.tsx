import React from 'react';
import { 
  Text,
  TextInput, 
  Pressable,
  Image, 
  View,
  StyleSheet,
 } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import logo from "../../assets/travelry-logo.png";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CheckBox, Icon } from '@rneui/themed';

const auth = getAuth();

function WelcomeScreen<StackScreenProps>({ navigation }) {

  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
      <View className="w-full h-full bg-white">
        <View className="absolute mx-10 h-full flex justify-center align-center -mt-[20px]">
          <Image
            source={logo}
            style={{ width: 250, height: 250, alignSelf: "center" }}
          />
  
          <View className="flex-row">
            <View className="mt-1 space-y-4">
              <View className="w-[350px] h-auto font-main flex-row rounded-3xl px-3 py-2 bg-white border-gray-200 border-2">
              <MaterialCommunityIcons 
                name="email-fast-outline" 
                size={24} 
                color="black" 
                style={{ padding: 10 }}
              />
                <TextInput
                  placeholder="Email"
                  autoCapitalize="none"
                  value={value.email}
                  className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-3"
                  onChangeText={(text) => setValue({ ...value, email: text })}
                />
              </View>
  
              <View className="w-[350px] h-[60px] flex-1 flex-row justify-center align-center rounded-3xl px-3 py-2 bg-white border-gray-200 border-2">
              <MaterialCommunityIcons 
                name="form-textbox-password" 
                size={24} 
                color="black" 
                style={{ padding: 10 }}
              />
                <TextInput
                  placeholder="Password"
                  className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-2"
                  onChangeText={(text) => setValue({ ...value, password: text })}
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>
          <Pressable className="w-[350px] h-[50px] border border-gray-200 rounded-2xl mt-40 py-3">
              <Text
                className="text-center text-black uppercase text-base"
                onPress={signIn}
              >
                Sign In
              </Text>
            </Pressable>
            <Pressable className="relative w-[350px] h-[50px]  border border-gray-200 bg-[#F7481D] rounded-2xl mt-10 mb-4 py-2">
              <Text
                className="text-center text-white uppercase text-base"
                onPress={signIn}
              >
                Create Account
              </Text>
            </Pressable>

        </View>
      </View>
    // <View className="w-full h-full bg-white">

    //   <View className="mx-4 h-full flex justify-center align-center space-y-6">
    //   <View>
    //   <Image source={require('../../assets/travelry-logo.png')} style={{width: 350, height: 250, alignSelf: 'center'}}/>
    //   </View>
    //   <Text className="text-blue text-2xl font-bold text-center mx-6" ></Text>
    //   {/* <Text className="text-black text-base text-center mx-4" >Do you need a reliable travel advisor? Book a hotel, find a restaurant, find popular attractions and book excursions!</Text> */}
    //   <View >
    //     <Pressable className="bg-white border-2 border-[#F6481D] rounded-3xl py-4 px-4 m-4" ><Text className="text-center text-black font-bold text-base uppercase" onPress={() => navigation.navigate('Sign In')}>Sign In</Text></Pressable>
    //     <Pressable className="bg-[#F6481D] rounded-3xl py-4 px-4 m-4" ><Text className="text-center text-white font-bold text-base uppercase" onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text></Pressable>
    //   </View>
    // </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
function setIsLogin(arg0: boolean) {
  throw new Error("Function not implemented.");
}


export default WelcomeScreen;
