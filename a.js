import React, {useState}from 'react'
import { View, Text,TouchableOpacity,Button,Image,ImageBackground,Dimensions,ScrollView,StyleSheet,FlatList} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width}= Dimensions.get("window");

const images=[
  require('../../images/1.jpg'),
  require('../../images/2.jpg'),
  require('../../images/3.jpg'),
  require('../../images/4.jpg')
]
const Data=[
  {
    id:1,
    name:'Cà Phê Sữa Đá Chai Fresh 250ML',
    price:'79.000đ',
    anh:require('../../images/capheda.jpg')
  },
  {
    id:2,
    name:'Cà Phê Sữa Đá Chai Fresh 250ML',
    price:'79.000đ',
    anh:require('../../images/capheda.jpg')
  },
  {
    id:3,
    name:'Cà Phê Sữa Đá Chai Fresh 250ML',
    price:'79.000đ',
    anh:require('../../images/capheda.jpg')
  },
];
const data = [
    {
      id:1,
      image:require('../../images/1.jpg'),
    },
    {
      id:2,
      image:require('../../images/2.jpg'),
    },
    {
      id:3,
      image:require('../../images/3.jpg'),
    },
    {
      id:4,
      image:require('../../images/4.jpg'),
    },  
];
const Item=({name,price,anh})=>(
  <View style={{marginBottom:10}}>
  <View style={{flexDirection:'row',marginLeft:15, alignItems:'center'}}>
    <Image 
      source={require('../../images/capheda.jpg')}
      style={{width:70,height:80,borderRadius:10}}
    />
    <View style={{flexDirection:'column',margin:10}}>
      <Text style={{color:'black'}}>Được yêu thích <Icon name="heart" size={14} color='#D8518A'/></Text>
      <Text style={{color:'black',fontWeight:'bold', width:140}}>Cà Phê Sữa Đá Chai Fresh 250ML</Text>
    </View>
    <TouchableOpacity style={{width:90,height:40,backgroundColor:'#EA8022',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white'}}>79.000đ</Text>
    </TouchableOpacity>
  </View>
  </View>
);
const ItemImage = ({ image }) => (
  <Image source ={image}
    style={{width:360,height:200, resizeMode:'cover' }}
  />
);
export default function home({navigation}) {
  const sign=()=>navigation.navigate('Login');
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const renderItemImage = ({ item }) => (
    <ItemImage image={item.image} />
  );
  return (
    <ParallaxScrollView
      backgroundColor="#D8B587"
      contentBackgroundColor="white"
      parallaxHeaderHeight={350}
      renderForeground={() => (
        <View style={{ height: 300,margin:15,backgroundColor:'white',borderRadius:10,marginTop:30}}>
          <ImageBackground 
            source={require('../../images/Untitleddd.png')} 
            resizeMode="cover" 
            style={{height: 310,alignItems: 'center'}} 
            imageStyle={{ borderRadius: 10}}
          >
            <Text style={{color:'black', marginBottom:10,marginTop:30,fontWeight:'bold',fontSize:19}}>Đăng nhập</Text>
            <Text style={{color:'black'}}>Sử dụng app để tích điểm và đổi những ưu đãi chỉ</Text>
            <Text style={{color:'black'}}>dành riêng cho thành viên bạn nhé</Text>
            <TouchableOpacity onPress={sign} style={{width:100,backgroundColor:"#F28C09", borderRadius:6,width:150, marginTop:10, marginBottom:75}}>
              <Text style={{color:'white',alignSelf:'center',padding:7,fontWeight:'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white',borderWidth:0.5,borderRadius: 8,padding:15,flexDirection:'row',marginBottom:20,width:'86%'}}>
              <Text style={{color:'black',fontSize:14}}>The Coffee House's Reward</Text>
              <Icon name="angle-right" size={30} color="black" style={{color:'black',fontSize:20,position: 'absolute',right: 10,top:15}}/>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )}>
      <View>
        <View style={{backgroundColor:'gray',margin:10,borderRadius:10,height:3,width:40,alignSelf:'center'}}></View>
        <View style={{flexDirection:'row',padding:10,borderRadius:10,borderWidth:0.5,margin:15,alignSelf:'center',width:'90%'}}>
          <View style={{flex:1,marginLeft:'15%'}}>
            <Image 
              style={{width:50,height:50}}
              source={require('../../images/Untitled.1png.png')}
            />
            <Text style={{color:'black'}}>Giao hàng</Text>
          </View>
          <View style={{borderLeftWidth:0.5,marginLeft:20}}></View>
          <View style={{flex:1,marginLeft:'20%'}}>
            <Image 
              style={{width:50,height:51}}
              source={require('../../images/Untitled.png')}
            />
            <Text style={{color:'black'}}>Mang đi</Text>
          </View>
        </View>
      </View>
      <View style={{marginLeft:20,width:width-40}}>
        <FlatList
        data={data}
        horizontal
        pagingEnabled
        renderItem={renderItemImage}
        keyExtractor={item => item.id}
      /> 
      </View>
      <View style={{margin:20,borderRadius:8,height:320,borderWidth:0.5,width:'90%'}}>
        <Text style={{margin:15,color:'black',fontSize:17,fontWeight:'bold'}}>Gợi ý riêng cho Hi:</Text>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ParallaxScrollView>
  )
}
