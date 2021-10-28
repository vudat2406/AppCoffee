import React, {useState,useEffect} from 'react'
import { View, Text,TouchableOpacity,Button,Image,ImageBackground,Dimensions,ScrollView,StyleSheet,FlatList} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

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
    name:'Trà Đào Cam Sả Chai Fresh 500ML',
    price:'109.000đ',
    anh:require('../../images/tra2.jpg')
  },
  {
    id:3,
    name:'Trà Sữa Ô long Nướng Trân Châu Chai Fresh 500ML',
    price:'99.000đ',
    anh:require('../../images/t3.jpg')
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
const listTab=[
  {
    id:1,
    status:'Ưu đãi đặc biệt'
  },
  {
    id:2,
    status:'Cập nhật từ nhà'
  },
  {
    status:'#CoffeeLover'
  }
];
const dataproduct=[
  {
    name:'CUỐI THÁNG VUI TƯƠI-RỘN RÀNG DEAL ĐỈNH',
    date:'26/10',
    status:'Ưu đãi đặc biệt'
  },
  {
    name:'ĐỔI BEAN NHANH LẤY ƯU ĐÃI XỊN',
    date:'18/10',
    status:'Ưu đãi đặc biệt'
  },
  {
    name:'DEAL SIÊU YÊU CHIỀU BẠN HẾT SỨC',
    date:'16/10',
    status:'Ưu đãi đặc biệt'
  },
  {
    name:'RỘN RÀNG GỌI MÓN, NHÀ & MOMO DEAL XỊN',
    date:'19/10',
    status:'Ưu đãi đặc biệt'
  },
  {
    name:'CHAI FRESH LUÔN BÊN BẠN TRONG MỌI KHOẢNH KHẮC',
    date:'19/10',
    status:'Cập nhật từ nhà'
  },
  {
    name:'CHAI FRESH: THAY LỜI YÊU DÀNH TẶNG NGƯỜI PHỤ NỮ ĐẶC BIỆT',
    date:'19/10',
    status:'Cập nhật từ nhà'
  },
  {
    name:'1',
    date:'19/10',
    status:'Cập nhật từ nhà'
  },
  {
    name:'2',
    date:'19/10',
    status:'Cập nhật từ nhà'
  },
  {
    name:'3',
    date:'19/10',
    status:'#CoffeeLover'
  },
  {
    name:'4',
    date:'19/10',
    status:'#CoffeeLover'
  },
  {
    name:'5',
    date:'19/10',
    status:'#CoffeeLover'
  },
  {
    name:'6',
    date:'19/10',
    status:'#CoffeeLover'
  }
];
const ItemImage = ({ image }) => (
  <Image source ={image}
    style={{width:width-40,height:170, resizeMode:'cover' }}
  />
);
export default function home({navigation}) {
  // useEffect(() => {
  //   const getProductList = async () => {
  //     // console.tron.log('qq')
  //     console.log('qq')
  //     try {
  //       const response = await axios.get('http://forever21.hungvu.net/get-products');
  //       // const response = await getProduct()
  //       // console.tron.log('data', response);
  //       console.log('data', response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getProductList()

  // }, [])
  
  const sign=()=>navigation.navigate('Login');
  const renderItemImage = ({ item }) => (
    <ItemImage image={item.image} />
  );
  const [status,setStatus] = useState('Ưu đãi đặc biệt')
  const [dataList,setDatalist]=useState(dataproduct)
  const setStatusFilter=status =>{
    setDatalist([...dataproduct.filter(e=>e.status===status)])

    setStatus(status)
    
  }
  useEffect(() => {
      setDatalist([...dataproduct.filter(e=>e.status===status)])
  }, [])
  return (
    <ParallaxScrollView
      backgroundColor="#D8B587"
      contentBackgroundColor="white"
      parallaxHeaderHeight={350}
      showsVerticalScrollIndicator={false}
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
      <View style={{margin:20,borderRadius:8,height:340,borderWidth:0.5,width:'90%'}}>
        <Text style={{margin:15,color:'black',fontSize:17,fontWeight:'bold'}}>Gợi ý riêng cho Hi:</Text>
        {
          Data.map((e,k)=>
            <View style={{marginBottom:10}} key={k}>
              <TouchableOpacity>
                <View style={{flexDirection:'row',marginLeft:15, alignItems:'center'}}>
                  <Image 
                    source={e.anh}
                    style={{width:70,height:80,borderRadius:10}}
                  />
                  <View style={{flexDirection:'column',margin:10}}>
                    <Text style={{color:'black'}}>Được yêu thích <Icon name="heart" size={14} color='#D8518A'/></Text>
                    <Text style={{color:'black',fontWeight:'bold', width:140}}>{e.name}</Text>
                  </View>
                  <TouchableOpacity style={{width:90,height:40,backgroundColor:'#EA8022',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>{e.price}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
      <Text style={{marginLeft:20,marginBottom:10,fontWeight:'bold',color:'black',fontSize:17}}>Khám phá thêm <Icon name="moon-o" size={20} color="#fc2"/></Text>
      <View style={styles.listTab}>
        {
          listTab.map((e,i)=>(
            <TouchableOpacity key={i} style={[styles.btn,status===e.status && styles.btnActive ]}
            onPress={()=>setStatusFilter(e.status)}
            >
              <Text style={[styles.text,status===e.status && styles.textActive ]}>{e.status}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={{marginLeft:10,flexDirection:'row',flexWrap: 'wrap'}}>
        {
          dataList.map((e,i)=>(
            <View key={i} style={{margin:10,width:160,borderRadius:8}}>
              <View style={{flexDirection:'column'}}>
                <Image
                  style={{width:160,height:160,borderRadius:8}}
                  source={{uri:'https://i.imgur.com/lBAdcNP.jpg'}}
                />
                <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>{e.name}</Text>
                <View style={{flexDirection:'row'}}>
                  <Icon name="calendar" size={15} style={{marginRight:10}} />
                  <Text style={{color:'black',fontSize:12}}>{e.date}</Text>
                </View>
              </View>
            </View>
          ))
        }
      </View>
      
    </ParallaxScrollView>
  )
}
const styles = StyleSheet.create({
  listTab: {
    paddingLeft:20,
    flexDirection:'row',
  },
  btn:{
    borderRadius:25,
    padding:6,
    marginRight:5,
    color:'black'
  },
  text:{
    color:'black',
    fontWeight:'bold'
  },
  btnActive:{
    backgroundColor:'#eee'
  },
  textActive:{
    color:'orange'
  }
})