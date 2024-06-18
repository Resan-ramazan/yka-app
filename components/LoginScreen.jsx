import { View, Text, Image,StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";


WebBrowser.maybeCompleteAuthSession();


export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);

  return (
    <View>
      <View style={{
        display:"flex",
        alignItems:'center',
        marginTop:100
      }}>


        <Image
          source={require("../assets/images/login.png")}
          style={{
            width: 500,
            height: 450,
            borderRadius: 20,
            borderWidth: 4,
            borderColor: "#00",
          }}
        />
      </View>

          <View style={styles.subContainer}>
            <Text style={{
                fontSize:30,
                fontFamily:"sans-serif",
                textAlign:"center"
            }}>Your Ultimete 
                <Text style={{color:"#7F57F1"}}> Software Educational </Text> App
            </Text>
            
            <Text style={{
                fontSize:15,
                textAlign:'center',
                fontFamily:'outfit',
                marginVertical:15,
                color:'#8f8f8f'
            }}>Find your favorite programming language and learn new programming language</Text>

            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={{textAlign:'center',color:'white'}}>Let's Get Started</Text>
            </TouchableOpacity>

          </View>



    </View>
  );
}


const styles = StyleSheet.create({

    subContainer:{
        backgroundColor:"#fff", 
        padding:20,
        marginTop:-40
    },
    btn:{
        backgroundColor:"#7F57F1",
        padding:16,
        borderRadius:99,
        marginTop:20.


    }
})

