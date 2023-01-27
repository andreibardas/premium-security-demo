import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

const OnboardingImage = require('../assets/images/onboarding.png');


export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <Image
            source={OnboardingImage}
            style={{ height: height / 2, width, zIndex: 1 }}
          />
        </Block>
        <Block flex={1.6} space="between" style={styles.padded}>
          <Block style={{ paddingTop: 50, position: 'relative' }}>
            <LinearGradient
              style={styles.gradient}
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
            <Block style={{ marginBottom: theme.SIZES.BASE / 2, paddingHorizontal: theme.SIZES.BASE * 2, zIndex: 3 }}>
              <Block>
                <Text color="white" size={60}>Premium</Text>
              </Block>
              <Block row>
                <Text color="white" size={60}>Security</Text>
                <Block middle style={styles.pro}>
                  <Text size={16} color="white">Demo</Text>
                </Block>
              </Block>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2,  zIndex: 3 }}>
              <Text size={14} color='rgba(255,255,255,0.6)'>
                Această aplicație reprezintă un Demo creat de echipa de dezvoltare Yuriesoft.
              </Text>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2,  zIndex: 3, }}>
              <Text size={14} color='rgba(255,255,255,0.6)'>
                Datele introduse în aplicație nu sunt salvate iar aplicația nu este destinată uzului comercial.
              </Text>
            </Block>
          </Block>
          <Block center style={{ paddingBottom: 30 }}>
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={() => navigation.navigate('App')}>
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
