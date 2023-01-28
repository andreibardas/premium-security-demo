import React, {useState, useEffect} from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform,  View } from 'react-native';
import {Block, Button, Input, Text, theme} from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

const MegaCoverPhoto = require('../assets/images/mega-cover-photo-2.jpeg');

const Profile = () =>  {

    const [name, onChangeName] = React.useState('Mega Image Mosilor');
    const [oras, onChangeOras] = React.useState('Bucuresti');
    const [adresa, onChangeAdresa] = React.useState('Calea Mosilor 207');
    const [codPostal, onChangeCodPostal] = React.useState('030167');
    const [email, onChangeEmail] = React.useState('contact@megaimage.com');
    const [telefon, onChangeTelefon] = React.useState('0747950028');

    return (
      <Block flex style={styles.profile, {width: "100%"}}>
        <ImageBackground
          source={MegaCoverPhoto}
          style={styles.profileContainer}
          imageStyle={styles.profileImage}>
          <View style={styles.innerFrame}>

          <Block flex style={styles.profileDetails}>
            <Block style={styles.profileTexts}>
              <Text color="white" size={28} style={{ paddingBottom: 8 }}>Mega Image Mosilor</Text>
              <Block row space="between">
                {/*<Block row>*/}
                  {/*<Block middle style={styles.pro}>*/}
                  {/*  <Text size={16} color="white">Pro</Text>*/}
                  {/*</Block>*/}
                  {/*<Text color="white" size={16} muted style={styles.seller}>Seller</Text>*/}
                  {/*<Text size={16} color={materialTheme.COLORS.WARNING}>*/}
                  {/*  4.8 <Icon name="shape-star" family="GalioExtra" size={14} />*/}
                  {/*</Text>*/}
                {/*</Block>*/}
                <Block>
                  <Text color={theme.COLORS.MUTED} size={16}>
                    <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} />
                    {`  `} Calea Moșilor 207, București 030167
                  </Text>
                </Block>
              </Block>
            </Block>
            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
          </Block>
          </View>
        </ImageBackground>
        <Block flex={0.7}>
          <Block style={styles.options}>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
              <Text style={{marginBottom: 20}}>ID Obiectiv: <Text style={{fontWeight: "bold"}}>3947855</Text></Text>
              <Input
                  placeholder="Denumire Obiectiv"
                  right
                  // icon="heart"
                  // family="antdesign"
                  // iconSize={14}
                  // iconColor="red"
                  value={name}
                  onChangeText={text => onChangeName(text)}
                  help="Denumire Obiectiv:"
              />
              <Input
                  placeholder="Oraș"
                  right
                  // icon="heart"
                  // family="antdesign"
                  // iconSize={14}
                  // iconColor="red"
                  value={oras}
                  onChangeText={text => onChangeOras(text)}
                  help="Oraș:"
              />
              <Input
                  placeholder="Adresă"
                  right
                  // icon="heart"
                  // family="antdesign"
                  // iconSize={14}
                  // iconColor="red"
                  value={adresa}
                  onChangeText={text => onChangeAdresa(text)}
                  help="Adresă:"
              />
              <Input
                  placeholder="Cod Poștal"
                  right
                  type="numeric"
                  // icon="heart"
                  // family="antdesign"
                  // iconSize={14}
                  // iconColor="red"
                  value={codPostal}
                  onChangeText={text => onChangeCodPostal(text)}
                  help="Cod Poștal:"
              />
              <Input
                  placeholder="Email"
                  right
                  type="email-address"
                  // icon="heart"
                  // family="antdesign"
                  // iconSize={14}
                  // iconColor="red"
                  value={email}
                  onChangeText={text => onChangeEmail(text)}
                  help="Email:"
              />
              <Input
                  placeholder="Telefon"
                  right
                  type="numeric"
                  // icon="heart"
                  // family="antdesign"
                  // iconSize={14}
                  // iconColor="red"
                  value={telefon}
                  onChangeText={text => onChangeTelefon(text)}
                  help="Telefon:"
              />
              <Block style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
              <Button
                  center
                  shadowless
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  // textStyle={styles.optionsButtonText}
                  style={styles.optionsButton}
                  onPress={() => alert('Funcționalitatea nu este implementată în versiunea Demo')}
              >
                Salvează
              </Button>
              </Block>
              {/*<Block row space="between" style={{ padding: theme.SIZES.BASE, }}>*/}
              {/*  <Block middle>*/}
              {/*    <Text bold size={12} style={{marginBottom: 8}}>36</Text>*/}
              {/*    <Text muted size={12}>Orders</Text>*/}
              {/*  </Block>*/}
              {/*  <Block middle>*/}
              {/*    <Text bold size={12} style={{marginBottom: 8}}>5</Text>*/}
              {/*    <Text muted size={12}>Bids & Offers</Text>*/}
              {/*  </Block>*/}
              {/*  <Block middle>*/}
              {/*    <Text bold size={12} style={{marginBottom: 8}}>2</Text>*/}
              {/*    <Text muted size={12}>Messages</Text>*/}
              {/*  </Block>*/}
              {/*</Block>*/}
              {/*<Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>*/}
              {/*  <Text size={16}>Recently viewed</Text>*/}
              {/*  <Text size={12} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate('Home')}>View All</Text>*/}
              {/*</Block>*/}
              {/*<Block row space="between" style={{ flexWrap: 'wrap' }} >*/}
              {/*  {Images.Viewed.map((img, imgIndex) => (*/}
              {/*    <Image*/}
              {/*      source={{ uri: img }}*/}
              {/*      key={`viewed-${img}`}*/}
              {/*      resizeMode="cover"*/}
              {/*      style={styles.thumb}*/}
              {/*    />*/}
              {/*  ))}*/}
              {/*</Block>*/}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
}


const styles = StyleSheet.create({
  innerFrame: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    // width: width,
    height: 'auto',
  },
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  profileImage: {
    // width: width,
    height: 'auto',
  },
  profileContainer: {
    // width: width,
    height: 'auto',
    flex: 1,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE,
    marginBottom: 0,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
  button: {
    // width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});

export default Profile;
