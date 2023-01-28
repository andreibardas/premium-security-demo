import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Block, Text, Input, theme, Button } from 'galio-framework';
import { BarChart, Grid } from 'react-native-svg-charts'

import { Icon, Product } from '../components/';

const { width } = Dimensions.get('window');
import homeImages from '../constants/images/home';
import { PieChart } from 'react-native-svg-charts'
import { Text as SvgText } from 'react-native-svg'
import {materialTheme} from "../constants";

export default class Home extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;
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

  renderTabs = () => {
    const { navigation } = this.props;

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

  renderProducts = () => {


    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };


    const data = [
      {
        key: 1,
        amount: 22.2,
        svg: { fill: '#600080' },
      },
      {
        key: 2,
        amount: 33.3,
        svg: { fill: '#9900cc' }
      },
      {
        key: 3,
        amount: 22.2,
        svg: { fill: '#c61aff' }
      },
      {
        key: 4,
        amount: 22.2,
        svg: { fill: '#d966ff' }
      },
    ]

    const data2 = [ 29, 43 ]

    const CUT_OFF = 20
    const Labels2 = ({ x, y, bandwidth, data }) => (
        data2.map((value, index) => (
            <Text
                key={ index }
                x={ x(index) + (bandwidth / 2) }
                y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                fontSize={ 14 }
                fill={ value >= CUT_OFF ? 'white' : 'black' }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
            >
              {value}
            </Text>
        ))
    )


    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
            <SvgText
                key={index}
                x={pieCentroid[ 0 ]}
                y={pieCentroid[ 1 ]}
                fill={'white'}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={14}
                stroke={'black'}
                strokeWidth={0.2}
            >
              {data.amount + "%"}
            </SvgText>
        )
      })
    }


    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
        style={{width: "100%"}}
      >
        <Block flex style={{width: "100%"}}>

          <Block style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10, width: "100%"}}>
            {/*<Button onPress={() => alert(width)}>alert</Button>*/}
          <Text h6>Ultimele Deplasări</Text>
          <Block right style={{padding: 4}}>
            <Text
                size={12}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => alert("Funcționalitatea nu este implementată în versiunea Demo")}>
              Vezi Toate
            </Text>
          </Block>
          </Block>

          <Block style={{ borderRadius: 10, marginBottom: 40}}>



              <Block style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>

              <Block>
                <Button onPress={() => alert("Funcționalitatea nu este implementată în versiunea Demo")} color={materialTheme.COLORS.DEFAULT} style={[styles.button, styles.shadow], {width: width/1.3}}>
                  Deplasare 26 Jan 15:32
                </Button>
              </Block>

                <Block>
                  <Button onPress={() => alert("Funcționalitatea nu este implementată în versiunea Demo")} color={materialTheme.COLORS.DEFAULT} style={[styles.button, styles.shadow], {width: width/1.3}}>
                    Deplasare 24 Jan 12:42
                  </Button>
                </Block>
                <Block>
                  <Button onPress={() => alert("Funcționalitatea nu este implementată în versiunea Demo")} color={materialTheme.COLORS.DEFAULT} style={[styles.button, styles.shadow], {width: width/1.3}}>
                    Deplasare 23 Jan 11:33
                  </Button>
                </Block>

              </Block>

          </Block>

          <Block style={{marginBottom: 40}}>
            <Text h6 style={{marginBottom: 10}}>Motivul Deplasărilor</Text>
            <Block style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center"}}>
            {/*<Block>*/}
            <Block style={{width: width/2.3}}>
              <Text><Block style={{width: 10, height: 10, backgroundColor: "#600080"}}></Block> Solicitare telefonică șef magazin</Text>
              <Text><Block style={{width: 10, height: 10, backgroundColor: "#9900cc"}}></Block> Patrulare</Text>
              <Text><Block style={{width: 10, height: 10, backgroundColor: "#c61aff"}}></Block> Participare verificări/analizări prejudicii</Text>
              <Text><Block style={{width: 10, height: 10, backgroundColor: "#d966ff"}}></Block> Solicitare telefonică CMV</Text>
            </Block>
              <Block style={{width: width/2.3}}>
          <PieChart
              style={{ height: width/2.3 }}
              valueAccessor={({ item }) => item.amount}
              data={data}
              spacing={0}
              outerRadius={'95%'}
              innerRadius={'10%'}
          >
            <Labels/>
          </PieChart>
              </Block>



            </Block>
          </Block>


          <Block>
            <Text h6 style={{marginBottom: 10}}>Au fost constatate neconformități?</Text>

            <Block style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <Text>Da (29)</Text>
            <Text>Nu (43)</Text>
            </Block>

            <View style={{ display: "flex", flexDirection: 'row', height: 200, paddingVertical: 16 }}>
            <BarChart
                style={{ flex: 1 }}
                data={data2}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                contentInset={{ top: 10, bottom: 10 }}
                spacing={0.2}
                gridMin={0}
            >
              <Grid direction={Grid.Direction.HORIZONTAL}/>

            </BarChart>
            </View>
          </Block>

        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    // width: width,
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
    width: width * 0.50,
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
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
