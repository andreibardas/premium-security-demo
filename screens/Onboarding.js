import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import {normalize} from "../utils/responsive";

const OnboardingImage = require('../assets/cms/logo.png');


export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        {/*<Button onPress={() => alert(width)}>alert</Button>*/}
        <StatusBar barStyle="light-content" />
        <Block flex={2} center>
          <Image
            source={OnboardingImage}
            style={{ height: height / 2.3, width, zIndex: 1 }}
          />
        </Block>
        <Block flex={4} space="between" style={styles.padded}>
          <Block style={{ paddingTop: 50, position: 'relative' }}>
            <LinearGradient
              style={styles.gradient}
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
            <Block style={{ marginBottom: theme.SIZES.BASE / 2, paddingHorizontal: theme.SIZES.BASE * 2, zIndex: 3 }}>
              <Block>
                <Text color="white" size={48}>Central</Text>
              </Block>
              <Block>
                <Text color="white" size={48}>Monitoring</Text>
              </Block>
              <Block row>
                <Text color="white" size={48}>System</Text>
                {/*<Block middle style={styles.pro}>*/}
                {/*  <Text size={15} color="white">Demo</Text>*/}
                {/*</Block>*/}
              </Block>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2,  zIndex: 3 }}>
              <Text size={14} color='rgba(255,255,255,0.6)'>
                Această aplicație este destinată generării de rapoarte și aparține companiei C.M.S.
              </Text>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2,  zIndex: 3, }}>
              <Text size={14} color='rgba(255,255,255,0.6)'>
                &#169; 2023 Central Monitoring System
              </Text>
            </Block>
          </Block>
          <Block center style={{ paddingBottom: 30 }}>
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={() => navigation.navigate('SignIn')}>
              ÎNCEPE
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    // paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 8,
    marginLeft: 12,
    borderRadius: 2,
    height: 22
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    top: 33 + theme.SIZES.BASE,
    left: 0,
    right: 0,
    height: 90,
  },
});
