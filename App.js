import React from 'react';
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RadioButton } from 'react-native-paper';
import { Header} from 'react-native-elements';
import Slider from '@react-native-community/slider';
import ModalDropdown from 'react-native-modal-dropdown';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    rectangle86 : {
        width: 250,
        height: 59.3,
        backgroundColor: "#623192",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070"
      },
      smile1726471960720 : {
        width: 350.3,
        height: 350.7,
        alignSelf:'center',
        marginTop:10,
        borderWidth: 0.7,
        borderColor: "#707070"
      },
      idm565Kl : {
        width: 100,
        height: 21.3,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707",
        marginRight:60,
      },
      basicPlanMember : {
        width: 120.7,
        height: 13.3,
        fontFamily: "Roboto",
        fontSize: 10,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 13.3,
        letterSpacing: 0,
        textAlign: "right",
        color: "#ff0000",
        marginLeft:60
      },
      rectangle87 : {
        width: 350.3,
        height: 200,
        backgroundColor: "#cdcccc",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
        alignSelf:'center',
        padding:3
      },
      saurabhDongre :{
        width: 200,
        height: 21.3,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707",
        marginLeft:50
      },
      yearsOld: {
        width: 140,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "right",
        color: "#070707",
        marginRight:50,
      },  
      bcom : {
        width: 200,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707"
      },
      layer : {
        width: 140,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "right",
        color: "#070707"
      },
      teacher : {
        width: 200,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707"
      },
      lakhTo5LakhsInr : {
        width: 140,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "right",
        color: "#070707"
      },
      hindu : {
        width: 200,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707"
      },
      neverMarried : {
        width: 140,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "right",
        color: "#070707"
      },
      mumbai : {
        width: 200,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707"
      },
      india : {
        width: 140,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "right",
        color: "#070707"
      },
      radio : {
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
      },
      groom : {
        width: 80.7,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 12.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "center",
        color: "#070707",marginLeft:10
      },
      bride :{
        width: 80.7,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 12.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "center",
        color: "#070707",
        marginLeft:10
      },
      height : {
        width: 90.3,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 12.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "center",
        color: "#070707"
      },
      to71 : {
        
        height: 14,
        fontFamily: "Roboto",
        fontSize: 10.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "center",
        color: "#070707"
      },
      education : {
        width: 100.7,
        height: 14,
        fontFamily: "Roboto",
        fontSize: 12.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "center",
        color: "#070707",
        marginRight:220,
        marginBottom:20,
        
      }, 
      rectangle91 : {
        width: 320,
        height: 30.7,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
        marginBottom:20,
        padding:5
      }, 
      rectangle97 : {
        width: 120,
        height: 28,
        borderRadius: 14.7,
        backgroundColor: "#eb2a2a",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070"
      }, 
      submit : {
        width: 61.3,
        height: 19.3,
        fontFamily: "Roboto",
        fontSize: 12.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 19.3,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
      }, 
      rectangle102 :{
        width: 350.3,
        height: 60,
        backgroundColor: "#623192",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
        alignSelf:'center',
      },  
      rectangle103 : {
        width: 150,
        height: 40,
        borderRadius: 5.3,
        backgroundColor: "#eb2a2a",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
        alignSelf:'center',  
      },
      profile : {
        width: 50.7,
        height: 19.3,
        fontFamily: "Roboto",
        fontSize: 14.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 19.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
      },
      idm1 : {
        width: 150,
        height: 21.3,
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707",
        marginRight:150,
        
      },
      sar : {
        width: 180,
        height: 21.3,
        opacity: 0.93,
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#070707",
        marginRight:150,
        marginTop:10
      },
      rectangle123 : {
        width: 200.7,
        height: 40,
        borderRadius: 14,
        backgroundColor: "#ff1a1a",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
        marginLeft:20,
        marginTop:10
      },
      updateMembership : {
        width: 150.3,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
      },
      editProfile : {
        width: 150.7,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "center",
        color: "#010101",
        marginLeft:30
      },
      basicP : {
        width: 150.7,
        height: 13.3,
        fontFamily: "Roboto",
        fontSize: 10,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 13.3,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ff0000",
        marginRight:50
      },
      addPhoto : {
        width: 200.7,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "right",
        color: "#010101",
        marginLeft:120,
      },
      rectangle122 : {
        width: 150.7,
        height: 40.3,
        backgroundColor: "#623192",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
        alignSelf:'center'
      },
      logOut : {
        width: 80.3,
        height: 16,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
      },            
  });

class HomeScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{width:500,height: 80.3,backgroundColor: "#623192",borderStyle: "solid",borderWidth: 0.7,borderColor: "#707070"}}>
              <View style={{height:30}}></View>
            <Text style={{  width: 400.3,height: 21.3,fontFamily: "Roboto",fontSize: 16,fontWeight: "bold",fontStyle: "normal",lineHeight: 21.3,letterSpacing: 0,
              textAlign: "center",color: "#ffffff"}}>DASHBOARD</Text>
            </View>
            <View style={{height: 15}}></View>
            <View >
                <ImageBackground
                    style={styles.smile1726471960720}
                    source={require('./assets/smile.jpg')}>
                </ImageBackground>
            </View>
            <View >
                <Text style={{marginTop:10,textAlign:'center'}}>_______________________________________________</Text>
            </View>
            <View style={{height: 10}}></View>
            <View>
                <View style={{flexDirection: 'row',alignSelf:'center'}}><Text style={styles.idm565Kl}>IDM565KL</Text><Text style={styles.basicPlanMember}>Basic Plan Member </Text></View>
            </View>
            <View style={styles.rectangle87}>
            <View style={{flexDirection: 'row',alignSelf:'center',height:30}}><Text style={styles.saurabhDongre}>Saurabh Dongre</Text><Text style={styles.yearsOld}>26 years old</Text></View>
            <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.bcom}>B com</Text><Text style={styles.layer}>5.4'</Text></View>
            <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.teacher}>Teacher </Text><Text style={styles.lakhTo5LakhsInr }>Lakh To 5 Lakhs INR </Text></View>
            <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.hindu }>HINDU</Text><Text style={styles.neverMarried }>Never Married </Text></View>
            <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.mumbai }>MUMBAI</Text><Text style={styles.india}>INDIA</Text></View>
            </View>
      </View>
      
    );
  }
}
class SearchScreen extends React.Component {
    render() {
      return (
        
        <View style={styles.container}>
        <View style={{width:500,height: 80.3,backgroundColor: "#623192",borderStyle: "solid",borderWidth: 0.7,borderColor: "#707070"}}>
              <View style={{height:30}}></View>
            <Text style={{  width: 400.3,height: 21.3,fontFamily: "Roboto",fontSize: 16,fontWeight: "bold",fontStyle: "normal",lineHeight: 21.3,letterSpacing: 0,
              textAlign: "center",color: "#ffffff"}}>SEARCH</Text>
            </View>
            <ScrollView>
            <View style={{height: 40}}></View>
            <View style={{flexDirection: 'row',alignSelf:'center'}}>
                <RadioButton style={styles.radio}
                />
                
                <Image
                    style={{width: 50,
                        height: 50}}
                    source={require('./assets/man.png')}
                />
                <View style={{width:80}}></View>
                <RadioButton style={{backgroundColor: "black",
                                    borderStyle: "solid",
                                    borderWidth: 0.7,
                                    borderColor: "#707070"}}
                />      
                <Image
                    style={{width: 50,
                        height: 50}}
                    source={require('./assets/woman.png')}
                />
            </View>
            <View style={{height:20}}></View>
            <View style={{flexDirection: 'row',alignSelf:'center',marginLeft:25}}>
            <Text style={styles.groom}>GROOM</Text>
            <View style={{width:80}}></View>
            <Text style={styles.bride}>BRIDE</Text></View>
            <View style={{alignSelf:'center'}}>
                <Text style={{textAlign:'center',color:'#cccccc'}}>________________________________________________________</Text>
            </View>
            <View style={{height:10}}></View>
            <View style={{alignSelf:'center'}}>
                <Text style={styles.height}>HEIGHT</Text>
                <View style={{height:10}}></View>
                <Text style={styles.to71}>4.1" TO 7.1"</Text>
                <Slider 
                style={{width: 350, height:40,alignSelf:'center'}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"/>
                </View>
                <View style={{alignSelf:'center'}}>
                <Text style={{textAlign:'center',color:'#cccccc'}}>________________________________________________________</Text>
            </View>
            <View style={{height:10}}></View>
            <View style={{alignSelf:'center'}}>
                <Text style={styles.height}>INCOME</Text>
                <View style={{height:10}}></View>
                <Text style={styles.to71}>0 Lakh to 1 Crore</Text>
                <Slider 
                style={{width: 350, height:40,alignSelf:'center'}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"/>
                </View>
                <View style={{alignSelf:'center'}}>
                <Text style={{textAlign:'center',color:'#cccccc'}}>________________________________________________________</Text>
            </View>
            <View style={{height:10}}></View>
            <View style={{alignSelf:'center'}}>
                <Text style={styles.height}>Age</Text>
                <View style={{height:10}}></View>
                <Text style={styles.to71}>19 Age to 60 Age</Text>
                <Slider 
                style={{width: 350, height:40,alignSelf:'center'}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"/>
                </View>
                <View style={{alignSelf:'center'}}>
                <Text style={{textAlign:'center',color:'#cccccc'}}>________________________________________________________</Text>
                </View>
            <View style={{height:10}}></View>
            <View style={{alignSelf:'center'}}>
                <View style={{alignItems:'center'}}>
                <Text style={styles.education}>EDUCATION</Text>
                <TextInput  style={styles.rectangle91}
                placeholder="High School"
                />
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={styles.education}>JOBS</Text>
                <TextInput  style={styles.rectangle91}
                placeholder="Others"
                />
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={styles.education}>MARTIAL STATUS</Text>
                <TextInput  style={styles.rectangle91}
                placeholder="Never Married"
                />
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={styles.education}>RELIGION</Text>
                <TextInput  style={styles.rectangle91}
                placeholder="No"
                />
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={styles.education}>MOTHER TONGUE</Text>
                <TextInput  style={styles.rectangle91}
               placeholder="ENGLISH"
                />
                </View>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.rectangle97}>   
                      <View style={{alignItems:'center'}} >
                        <Text style={styles.submit}>SUBMIT</Text>
                      </View>    
                </TouchableOpacity>
          </View>
          <View style={{height:50}}></View>
            </View>
            </ScrollView>
  
      </View>
    
      );
    }
  }
  class MatchsScreen extends React.Component {
    render() {
      return (
      
        <View style={styles.container}>
            <View style={{width:500,height: 80.3,backgroundColor: "#623192",borderStyle: "solid",borderWidth: 0.7,borderColor: "#707070"}}>
                <View style={{height:30}}></View>
                  <Text style={{  width: 400.3,height: 21.3,fontFamily: "Roboto",fontSize: 16,fontWeight: "bold",fontStyle: "normal",lineHeight: 21.3,letterSpacing: 0,
                  textAlign: "center",color: "#ffffff"}}>MATCHS</Text>
            </View>
            <ScrollView>
            <View>
              
              <View >
                <ImageBackground 
                    style={styles.smile1726471960720}
                    source={require('./assets/smile.jpg')}>
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/like.png')} />
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/favorite.png')} />
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/email.png')} />
                      <Image style={{width:50,height:40,marginLeft:270}} source={require('./assets/LOGOIDMCOLOR.png')} />
                    </ImageBackground >
              </View>
              <View style={{height: 10}}></View>
              <View>
                  <View style={{flexDirection: 'row',alignSelf:'center'}}><Text style={styles.idm565Kl}>IDM565KL</Text><Text style={styles.basicPlanMember}>Basic Plan Member </Text></View>
              </View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:30}}><Text style={styles.saurabhDongre}>Saurabh Dongre</Text><Text style={styles.yearsOld}>26 years old</Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.bcom}>B com</Text><Text style={styles.layer}>5.4'</Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.teacher}>Teacher </Text><Text style={styles.lakhTo5LakhsInr }>1 Lakh To 5 Lakhs INR </Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.hindu }>HINDU</Text><Text style={styles.neverMarried }>Never Married </Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.mumbai }>MUMBAI</Text><Text style={styles.india}>INDIA</Text></View></View>
              <View style={styles.rectangle102}>
                <View style={{height:10}}></View>
                <TouchableOpacity style={styles.rectangle103}>   
                      <View style={{alignItems:'center'}} >
                        <View style={{height:8}}></View>
                        <Text style={styles.profile}>Profile</Text>
                      </View>    
                </TouchableOpacity>
              </View>
              <View style={{height:20}}></View>
              <View>
                <View >
                <ImageBackground 
                    style={styles.smile1726471960720}
                    source={require('./assets/smile.jpg')}>
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/like.png')} />
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/favorite.png')} />
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/email.png')} />
                      <Image style={{width:50,height:40,marginLeft:270}} source={require('./assets/LOGOIDMCOLOR.png')} />
                    </ImageBackground >
                </View>
              <View style={{height: 10}}></View>
              <View>
                <View style={{flexDirection: 'row',alignSelf:'center'}}><Text style={styles.idm565Kl}>IDM565KL</Text><Text style={styles.basicPlanMember}>Basic Plan Member </Text></View>
              </View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:30}}><Text style={styles.saurabhDongre}>Saurabh Dongre</Text><Text style={styles.yearsOld}>26 years old</Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.bcom}>B com</Text><Text style={styles.layer}>5.4'</Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.teacher}>Teacher </Text><Text style={styles.lakhTo5LakhsInr }>1 Lakh To 5 Lakhs INR </Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.hindu }>HINDU</Text><Text style={styles.neverMarried }>Never Married </Text></View>
              <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.mumbai }>MUMBAI</Text><Text style={styles.india}>INDIA</Text></View>
              <View style={styles.rectangle102}>
                <View style={{height:10}}></View>
                <TouchableOpacity style={styles.rectangle103}>   
                      <View style={{alignItems:'center'}} >
                        <View style={{height:8}}></View>
                        <Text style={styles.profile}>Profile</Text>
                      </View>    
                </TouchableOpacity>
              </View>
              <View style={{height:20}}></View>
              <View>
                <View >
                  <ImageBackground 
                    style={styles.smile1726471960720}
                    source={require('./assets/smile.jpg')}>
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/like.png')} />
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/favorite.png')} />
                      <Image style={{width:60,height:60,padding:10,marginBottom:20,marginLeft:10,marginTop:20}} source={require('./assets/email.png')} />
                      <Image style={{width:50,height:40,marginLeft:270}} source={require('./assets/LOGOIDMCOLOR.png')} />
                    </ImageBackground >
                </View>
                <View style={{height: 10}}></View>
                <View>
                <View style={{flexDirection: 'row',alignSelf:'center'}}><Text style={styles.idm565Kl}>IDM565KL</Text><Text style={styles.basicPlanMember}>Basic Plan Member </Text></View>
                </View>
                <View style={{flexDirection: 'row',alignSelf:'center',height:30}}><Text style={styles.saurabhDongre}>Saurabh Dongre</Text><Text style={styles.yearsOld}>26 years old</Text></View>
                <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.bcom}>B com</Text><Text style={styles.layer}>5.4'</Text></View>
                <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.teacher}>Teacher </Text><Text style={styles.lakhTo5LakhsInr }>1 Lakh To 5 Lakhs INR </Text></View>
                <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.hindu }>HINDU</Text><Text style={styles.neverMarried }>Never Married </Text></View>
                <View style={{flexDirection: 'row',alignSelf:'center',height:40}}><Text style={styles.mumbai }>MUMBAI</Text><Text style={styles.india}>INDIA</Text></View>
              </View>
              <View style={styles.rectangle102}>
                  <View style={{height:10}}></View>
                  <TouchableOpacity style={styles.rectangle103}>   
                      <View style={{alignItems:'center'}} >
                        <View style={{height:8}}></View>
                        <Text style={styles.profile}>Profile</Text>
                      </View>    
                </TouchableOpacity>
              </View>
              <View style={{height:20}}></View>
           </View>
           </ScrollView>
      </View>

      );
    }
  }
    

class MenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={{width:500,height: 80.3,backgroundColor: "#623192",borderStyle: "solid",borderWidth: 0.7,borderColor: "#707070"}}>
                <View style={{height:30}}></View>
                <Text style={{  width: 400.3,height: 21.3,fontFamily: "Roboto",fontSize: 16,fontWeight: "bold",fontStyle: "normal",lineHeight: 21.3,letterSpacing: 0,
                      textAlign: "center",color: "#ffffff"}}>MENU</Text>
            </View>
            <View>
                <View>
                      <View style={{flexDirection: 'row',alignSelf:'center',height:30}}>
                      <View >
                        <View style={{height:60}}></View>
                          <Text style={styles.idm1}>IDM565KL</Text>
                          <Text style={styles.sar}>Saurabh Dongre</Text></View>
                      </View>
                      <View>
                          <Image style={{width:120,height:120,marginLeft:250}} source={require('./assets/smile1.png')} />
                      </View>
                      <View>
                          <TouchableOpacity style={styles.rectangle123}>   
                              <View style={{alignItems:'center'}} >
                                  <View style={{height:8}}></View>
                                  <Text style={styles.updateMembership}>UPDATE MEMBERSHIP</Text>
                              </View>    
                          </TouchableOpacity>
                      </View>      
                </View>
                <View style={{height:40}}></View>
                <View style={{alignSelf:'center'}}>
                      <View style={{flexDirection: 'row',alignSelf:'center',height:30}}>
                          <Text style={styles.basicP}>Basic Plan Member </Text>
                          <Text style={styles.editProfile}>EDIT PROFILE</Text>
                      </View>
                      <View style={{height:15}}></View>
                      <View style={{flexDirection:'row-reverse',alignSelf:'center',height:30}}>
                          <Text style={styles.addPhoto}>ADD PHOTO</Text>
                      </View>
                      <View style={{height:15}}></View>
                      <View style={{flexDirection:'row-reverse',alignSelf:'center',height:30}}>
                          <Text style={styles.addPhoto}>MESSAGE</Text>
                      </View>
                      <View style={{height:15}}></View>
                      <View style={{flexDirection:'row-reverse',alignSelf:'center',height:30}}>
                          <Text style={styles.addPhoto}>SHORTLIST</Text>
                      </View>
                      <View style={{height:15}}></View>
                      <View style={{flexDirection:'row-reverse',alignSelf:'center',height:30}}>
                          <Text style={styles.addPhoto}>CHANGE PASSWORD</Text>
                      </View>
                      <View style={{height:15}}></View>
                      <View style={{flexDirection:'row-reverse',alignSelf:'center',height:30}}>
                          <Text style={styles.addPhoto}>DELETE ACCOUNT</Text>
                      </View>
                </View>
                <View style={{height:50}}></View>
                <TouchableOpacity style={styles.rectangle122}>   
                      <View style={{alignItems:'center'}} >
                        <View style={{height:8}}></View>
                        <Text style={styles.logOut}>LOG OUT</Text>
                      </View>    
                </TouchableOpacity>
                </View>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen,  
        navigationOptions:{  
            tabBarLabel:'Home',
            tabBarOptions: {
              activeTintColor: '#ffffff',
              labelStyle: {
                fontSize: 12,
                fontWeight: "bold",
                padding:5,
                fontStyle: "normal",
                lineHeight: 13.3,
                letterSpacing: 0,
              },
              style: {
                backgroundColor: '#847de1',
              },
            },  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={20} name="home"/>  
                </View>),  
        }  
    },
    Search: { screen: SearchScreen,  
        navigationOptions:{  
            tabBarLabel:'Search', 
            tabBarOptions: {
              activeTintColor: '#ffffff',
              labelStyle: {
                fontSize: 12,
                fontWeight: "bold",
                padding:5,
                fontStyle: "normal",
                lineHeight: 13.3,
                letterSpacing: 0,
              },
              style: {
                backgroundColor: '#847de1',
              },
            }, 
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={20} name="search"/>  
                </View>),  
        }  
    },
    Matchs: { screen: MatchsScreen,  
        navigationOptions:{  
            tabBarLabel:'Matchs', 
            tabBarOptions: {
              activeTintColor: '#ffffff',
              labelStyle: {
                fontSize: 12,
                fontWeight: "bold",
                padding:5,
                fontStyle: "normal",
                lineHeight: 13.3,
                letterSpacing: 0,
              },
              style: {
                backgroundColor: '#847de1',
              },
            }, 
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={20} name="envelope-open-text"/>  
                </View>),  
        }  
    },
    Menu: { screen: MenuScreen,  
        navigationOptions:{  
            tabBarLabel:'Menu', 
            tabBarOptions: {
              activeTintColor: '#ffffff',
              labelStyle: {
                fontSize: 12,
                fontWeight: "bold",
                padding:5,
                fontStyle: "normal",
                lineHeight: 13.3,
                letterSpacing: 0,
              },
              style: {
                backgroundColor: '#847de1',
              },
            }, 
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={20} name="bars"/>  
                </View>),  
            activeColor: '#ffffff',  
            inactiveColor: '#f65a22',  
            barStyle: { backgroundColor: '#847de1' },  
        }  
    },

    
  
});


export default createAppContainer(TabNavigator);