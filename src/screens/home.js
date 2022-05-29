import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";

let ScreenHeight = Dimensions.get("window").height;

const CustomView = ({ title, imgName }) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <Image
        style={{ height: 90, width: 90 }}
        source={require("../../assets/images/" + imgName)}
      />
      <Text
        preset="bold"
        style={{
          textAlign: "center",
          color: colors.black,
          marginTop: 12,
          lineHeight: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default function Home() {
  return (
    <ScrollView>
      <View style={{ height: ScreenHeight }}>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Image
              style={{ height: 20, width: 24 }}
              source={require("../../assets/images/menu.png")}
            />
            <Image
              style={{ height: 24, width: 22 }}
              source={require("../../assets/images/notification.png")}
            />
          </View>
          <View
            style={{
              marginTop: 40,
              ...customFlex,
            }}
          >
            <Text preset="h1" style={{ color: colors.white }}>
              Covid-19
            </Text>
            <View style={styles.menu}>
              <Image
                style={{ height: 22, width: 22 }}
                source={require("../../assets/images/usa_flag.png")}
              />
              <Text
                style={{
                  color: colors.black,
                  paddingHorizontal: 8,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                USA
              </Text>
              <Image
                style={{ height: 8, width: 10, marginRight: 9 }}
                source={require("../../assets/images/dropdown.png")}
              />
            </View>
          </View>
          <Text preset="h2" style={{ marginTop: 40, color: colors.white }}>
            Are you feeling sick?
          </Text>
          <Text style={{ marginTop: 12, color: colors.white_half }}>
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
          <View style={{ ...customFlex, marginTop: 16 }}>
            <View
              style={{
                ...customBorders,
                flex: 1,
                backgroundColor: colors.red,
                marginRight: 17,
              }}
            >
              <View
                style={{ ...customFlex, justifyContent: "center", padding: 15 }}
              >
                <Image
                  style={styles.icon}
                  source={require("../../assets/images/phone.png")}
                />
                <Text preset="h4" style={{ color: colors.white }}>
                  Call Now
                </Text>
              </View>
            </View>
            <View
              style={{
                ...customBorders,
                flex: 1,
                backgroundColor: colors.blue,
              }}
            >
              <View
                style={{ ...customFlex, justifyContent: "center", padding: 15 }}
              >
                <Image
                  style={styles.icon}
                  source={require("../../assets/images/message.png")}
                />
                <Text preset="h4" style={{ color: colors.white }}>
                  Send SMS
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <Text preset="h2" style={{ color: colors.black }}>
            Prevention
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 24,
            }}
          >
            <CustomView title={"Avoid close\ncontact"} imgName="pic1.png" />
            <CustomView title={"Clean your\nhands often"} imgName="pic2.png" />
            <CustomView title={"Wear a\nfacemask"} imgName="pic3.png" />
          </View>
          <LinearGradient
            colors={["#AEA1E6", "#56549E"]}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              ...customFlex,
              borderRadius: 16,
              marginTop: 44,
            }}
          >
            <Image
              style={{
                height: 130,
                width: 124,
                marginTop: -15,
                marginLeft: 12,
              }}
              source={require("../../assets/images/female.png")}
            />
            <View style={{ paddingVertical: 22, marginRight: 16 }}>
              <Text preset="h3">Do your own test!</Text>
              <Text preset="small" style={{ marginTop: 8, fontWeight: 100 }}>
                Follow the instructions to <br />
                do your own test.
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}

const customFlex = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const customBorders = {
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  borderBottomRightRadius: 50,
  borderBottomLeftRadius: 50,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 27,
    backgroundColor: colors.violet,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  details: {
    backgroundColor: colors.white,
    flex: 1.3,
    padding: 24,
  },
  logoView: {
    ...customFlex,
    marginTop: 15,
  },
  menu: {
    ...customFlex,
    ...customBorders,
    backgroundColor: colors.white,
    padding: 7,
  },
  icon: { height: 24, width: 24, marginRight: 15 },
});
