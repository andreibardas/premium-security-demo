import React from 'react';
import {StyleSheet, Dimensions, ScrollView, TextInput} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import SelectDropdown from 'react-native-select-dropdown'
import { Radio } from 'galio-framework';


import { Icon, Product } from '../components/';

// const { width } = Dimensions.get('screen');
import womanImages from '../constants/images/woman';
import {materialTheme} from "../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Woman = () => {



  const renderSearch = () => {
    const { navigation } = props;
    const iconContent = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconContent}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Search')}
      />
    )
  }

  const renderTabs = () => {
    const { navigation } = props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Deals')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

 const renderProducts = () => {
    const societateaDePaza = ["AKB SECURITY", "ELNET SECURITY", "ORION SECURITY", "RPG SECURITY", "SSG SECURITY", "SSG FIRE"]
    const tipulDeControlEfectuat = ["Verificare agenți la schimbul de tură (L-V)", "Verificare agenți anterior armare (L-V)", "Verificare agenți la plecare (S-D)", "Verificare angajați MI la schimb de tură (L-V)", "Verificare angajați MI anterior armare (L-V)", "Verificare angajați MI la plecare (S-D)", "Verificări de noapte agenți /angajați MI", "Verificări de zi (cușete/vestiare/sală mese L-V)", "Control Poliție cu SO direct implicat", "Participare la oprire pers. suspecte de furt", "Participare verificări/analizări prejudicii", "Patrulare", "Solicitare telefonică șef magazin", "Solicitare telefonică agent securitate", "Solicitare telefonică CMV", "Altele"]
    const [neconformitati, onChangeNeconformitati] = React.useState('');


    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
      style={{width: "90%"}}
      >
        <Block flex style={{width: "100%"}}>
          {/*<Product product={womanImages[0]} horizontal />*/}
          {/*<Block flex row>*/}
          {/*  <Product product={womanImages[1]} style={{ marginRight: theme.SIZES.BASE }} />*/}
          {/*  <Product product={womanImages[2]} />*/}
          {/*</Block>*/}
          {/*<Product product={womanImages[3]} horizontal />*/}
          {/*<Product product={womanImages[4]} full />*/}
          <Text style={{marginBottom: 10, width: "100%"}}>Societatea de pază*: </Text>
          <SelectDropdown
          data={societateaDePaza}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
          defaultButtonText={'Societatea de pază'}
          buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
          rowTextForSelection={(item, index) => {
          return item;
        }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={12} />;
        }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          />

          <Text style={{marginBottom: 10, marginTop: 10}}>Tipul de control efectuat*: </Text>
          <SelectDropdown
              data={tipulDeControlEfectuat}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Tipul de control efectuat'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={12} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
          />

          <Text style={{marginBottom: 10, marginTop: 10}}>Neconformități (dacă e cazul): </Text>

          <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={100}
              onChangeText={text => onChangeNeconformitati(text)}
              value={neconformitati}
              style={{padding: 10, backgroundColor: "white"}}
          />

          <Block style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10}}>
            <Button
                center
                shadowless
                color={materialTheme.COLORS.BUTTON_COLOR}
                // textStyle={styles.optionsButtonText}
                style={styles.optionsButton}
                onPress={() => alert('Funcționalitatea nu este implementată în versiunea Demo')}
            >
              Trimite
            </Button>
          </Block>
        </Block>
      </ScrollView>
    )
  }

    return (
      <Block flex center style={styles.home}>
        {renderProducts()}
      </Block>
    );

}

const styles = StyleSheet.create({
  home: {
    width: "100%",
  },
  search: {
    height: 48,
    // width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    // width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    // width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },

  dropdown1BtnStyle: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#000', textAlign: 'left', fontSize: 14},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown4RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
});

export default Woman;
