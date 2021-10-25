import React , { useState } from 'react'
import { View, Text,Image,TouchableOpacity,TextInput,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function login({navigation}) {
  const [number,setNumber]= useState("");

  const onChangeNumber = (val) => setNumber(val)
  const Exit=()=> navigation.navigate('Home')
  const onSignIn = () => navigation.navigate('Home')

  return (
    <ScrollView>
      <View>
        <Image 
        style={{height:250,width:'100%'}}
        source={require('../../images/foody-upload-api-foody-mobile-cv-85b1b93b-210528223509.jpeg')}
      />
      <TouchableOpacity onPress={Exit} style={{width: 30,height: 30,borderRadius: 30 / 2,backgroundColor:'gray',fontSize:20,position: 'absolute',right: 30,top:30,justifyContent:'center'}}>
        <Icon name="close" size={15} color="white" style={{alignSelf:'center'}}/>
      </TouchableOpacity>
      </View>
      <View style={{margin:15}}>
        <View style={{marginTop:40,marginBottom:30}}>
          <Text style={{color:'black',alignSelf:'center'}}>Chào mừng bạn đến với</Text>
          <Text style={{color:'black',fontWeight:'bold',fontSize:21,alignSelf:'center'}}>THE COFFEE HOUSE</Text>
        </View>
        <View style={{borderWidth:0.5,borderRadius:8 ,flexDirection:'row'}}>
          <TouchableOpacity style={{width: 20,height: 20,borderRadius: 20 / 2,backgroundColor:'red',justifyContent:'center',marginLeft:15,marginTop:15}}>
            <Icon name="star" size={10} color="yellow" style={{alignSelf:'center'}}/>
          </TouchableOpacity>
          <Text style={{color:'black',alignSelf:'center',margin:5}}>+84</Text>
          <Text style={{color:'black',alignSelf:'center',margin:5}}>|</Text>
          <TextInput style={{}} 
            placeholder={'Nhập Số Điện Thoại'} 
            keyboardType="numeric"
            onChangeText={onChangeNumber}
          />
        </View>
        <TouchableOpacity 
          onPress={ onSignIn }
          style={{borderRadius:8,backgroundColor:'gray',justifyContent:'center',marginTop:15,height:48}} 
        >
          <Text style={{alignSelf:'center',color:'white',fontSize:15}}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <Text style={{borderBottomWidth:1,width:"42%"}}></Text>
          <Text style={{marginLeft:10,marginRight:10,marginTop:30,color:'black'}}>HOẶC</Text>
          <Text style={{borderBottomWidth:1,width:"42%"}}></Text>
        </View>
        <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#1be',borderRadius:8,height:48, marginTop:40,justifyContent:'center'}}>
          <Icon name="facebook-square" size={20} color="blue" style={{alignSelf:'center',marginRight:10,}}/>
          <Text style={{alignSelf:'center',color:'white',fontWeight:'bold'}}>Tiếp tục bằng Facebook</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',backgroundColor:'white',borderRadius:8,height:48, marginTop:10,justifyContent:'center',borderWidth:1}}>
          <Icon name="google" size={20} color="red" style={{alignSelf:'center',marginRight:10,}}/>
          <Text style={{alignSelf:'center',color:'black',fontWeight:'bold'}}>Tiếp tục bằng Google</Text>  
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
