import React from "react";
import {
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ListView
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";

import { Icon, Drawer as DrawerCustomItem } from "../components/";
import { Images, materialTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const profile = {
  avatar: Images.Profile,
  name: "Premium Security",
  type: "contact@premium-security.com",
  plan: "Pro",
  rating: 4.8
};

const MegaLogo = require('../assets/images/mega-logo.png');

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    "Obiectivul Meu",
    "Control Securitate",
    "Profil",
    "Setări",
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profil")}
        >
          <Block style={styles.profile}>
            {/*<Image source={MegaLogo} style={styles.avatar} />*/}
            <Text h5 color={"black"}>
              {profile.name}
            </Text>
          </Block>
        </TouchableWithoutFeedback>
        <Block row>
          <Text size={14} muted style={styles.seller}>
            {profile.username}
          </Text>
        </Block>
        <Block row>
          <Text size={14} muted style={styles.seller}>
            {profile.email}
          </Text>
        </Block>
        <Block row>
          <Text size={14} muted style={styles.seller}>
            {profile.phone}
          </Text>
        </Block>
      </Block>
      <Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0
            }
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: "center"
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: "flex-end"
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginBottom: theme.SIZES.BASE
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38
  },
  seller: {
    marginRight: 16
  },
});

export default CustomDrawerContent;
