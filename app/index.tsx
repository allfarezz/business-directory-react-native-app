import Colors from "@/services/Colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Index() {
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image
        source={require("./../assets/images/welcome.png")}
        style={styles.image}
      />

      <Text style={styles.heading}>WELCOME TO</Text>
      <Text style={styles.heading}>BUSINESS DIRECTORY</Text>

      <View style={{
        padding: 20,
        margin: 20,
        borderRadius: 20,
        marginTop: -10,
  
      }}>
        <Text style={{
          fontFamily: 'appFont',
          fontSize: 20,
          textAlign: 'center',
          color:Colors.WHITE,
          marginBottom: 10
        }}>Discover thousands of local business all in one place</Text>

        <View style={[styles.button,{backgroundColor:Colors.WHITE,borderColor:Colors.WHITE,
          display:'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
          }]}>
          <Image source={require('./../assets/images/google.png')}
          style={{
            width:20,
            height:20,
            marginRight: 10
          }}
          />
          <Text style={{
            fontFamily: 'appFont',
            fontSize: 15,
            textAlign: 'center'
          }}>Sign In With Google</Text>
        </View>

        <View style={[styles.button,{borderColor:Colors.WHITE}]}>
          <Text style={{
            fontFamily: 'appFont',
            fontSize: 15,
            textAlign: 'center',
            color:Colors.WHITE
          }}>Skip</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    height: "100%",
  },
  image: {
    width: width,
    height: height * 0.43,
    resizeMode: 'contain',
    marginTop: 120,
    marginBottom: 25
  },
  heading: {
    fontFamily: 'appFontBold',
    fontSize: 25,
    color: Colors.WHITE,
    textAlign: 'center'
  },
  button: {
    borderWidth:1,
    borderRadius:99,
    padding: 10,
    marginTop: 10
  }
})