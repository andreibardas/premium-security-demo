import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Block, Button, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

export default class Privacy extends React.Component {
  render() {
    return (
      <Block flex>
        <ScrollView
          overScrollMode='always'
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.privacy}
          >
          <Text size={16}>
            In recent months, Facebook, Google, IBM, Microsoft and others have aggressively lobbied officials in the Trump administration and elsewhere to start outlining a federal privacy law, according to administration officials and the companies. The law would have a dual purpose, they said: It would overrule the California law and instead put into place a kinder set of rules that would give the companies wide leeway over how personal digital information was handled.
          </Text>
          <Text size={16} color='rgba(0, 0, 0, 0.5)' style={{ paddingTop: 9 }}>
            “We are committed to being part of the process and a constructive part of the process,” said Dean Garfield, president of a leading tech industry lobbying group, the Information Technology Industry Council, which is working on proposals for the federal law. “The best way is to work toward developing our own blueprint.”
          </Text>
          <Text size={16} color='rgba(0, 0, 0, 0.5)' style={{ paddingTop: 9 }}>
            The efforts could set up a big fight with consumer and privacy groups, especially as companies like Facebook face scrutiny for mishandling users’ personal data. Many of the internet companies depend on the collection and analysis of such data to help them target the online ads that generate the bulk of their revenue.
          </Text>

        </ScrollView>
        <Block flex row space="between" style={styles.buttonsWrapper}>
          <Button color={materialTheme.COLORS.BUTTON_COLOR} style={styles.privacyButton}>ACCEPT</Button>
          <Button color={theme.COLORS.WHITE} textStyle={{ color: theme.COLORS.MUTED }} style={styles.privacyButton}>DECLINE</Button>
        </Block>
        <LinearGradient colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']} style={styles.gradient} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  privacy: {
    padding: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 5,
  },
  buttonsWrapper: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE * 1.75,
  },
  privacyButton: {
    width: '48%',
    height: theme.SIZES.BASE * 3,
    alignItems: 'center',
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 1
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
});
