import React ,{useState}from 'react'
import { View, Text ,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const data=[
  {
    diachi:'1',
    anh:'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668d8_5b21f8cb1acd4d02032668d8_kim_20ma.jpeg'
  },
  {
    diachi:'2',
    anh:'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668da_5b21f8cb1acd4d02032668da_trung_20hoa.jpeg'
  },
  {
    diachi:'3',
    anh:'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668dd_nguyen_20khanh_20toan.jpeg'
  },
  {
    diachi:'4',
    anh:'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e0_5b21f8cb1acd4d02032668e0_ho_20tung_20mau.jpeg'
  },
  {
    diachi:'5',
    anh:'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e2_van_20phu.jpeg'
  },
  {
    diachi:'6',
    anh:'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e3_times.jpeg'
  },
  {
    diachi:'7',
    anh:'https://minio.thecoffeehouse.com/image/admin/store/5b21f8cb1acd4d02032668e4_bui_20thi_20xuan.jpeg'
  },
]
export default function store() {
  const [search,setSearch]=useState('')
  return (
    <View>
      <View style={{backgroundColor:'white',zIndex:1000,height:52}}>
        <View style={{marginLeft:10,flexDirection:'row',position:'absolute',top:0, borderRadius:8,backgroundColor: '#e3e3e3',height:50,alignItems:'center',width:280}}>
          <Icon name="search" size={20} color="black" style={{marginLeft:20}}/>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={setSearch}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Nhập tên đường, quận"
          />
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="map-o" size={20} style={{margin:5,color:'black'}}/>
            <Text style={{color:'black'}}>Bản đồ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:'#e6e4e4',height:'100%'}}>
          <View style={{margin:15,marginTop:20}}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:19,marginBottom:10}}>Các cửa hàng khác</Text>
            {
              data.map((e,i)=>(
                <TouchableOpacity disabled={true} key={i} style={{flexDirection:'row',backgroundColor:'white',height:130,alignItems:'center',borderRadius:10, marginBottom:10}}>
                  <Image 
                    style={{width:100,height:100,margin:10,borderRadius:10}}
                    source={{uri:e.anh}} />
                  <View style={{height:100}}>
                    <Text style={{fontWeight:'bold',flex:1,fontSize:11}}>THE COFFEE HOUSE</Text>
                    <Text style={{color:'black',flex:3}}>{e.diachi}</Text>
                    <Text style={{fontSize:14,flex:1}}>cach day km</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
            
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  textInputStyle: {
    height:50,
    margin: 5,
    fontSize:18,
    width:235,
  },
});