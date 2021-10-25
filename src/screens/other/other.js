import React from 'react'
import { View, Text ,TouchableOpacity ,StyleSheet,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function other() {
  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop:15,marginLeft:15,marginRight:15}} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{fontSize:20,fontWeight:'bold',margin:10,marginTop:40,color:'black'}}>Tiện ích</Text>
          <View style={{backgroundColor:'white',borderRadius:8}}>
            <Icon name="file-text-o" size={20} color="orange" style={{marginLeft:15,marginTop:15}}/>
            <Text style={{margin:15 , color:'black'}}>Lịch sử đơn hàng</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
            <View style={{backgroundColor:'white',marginRight:10,borderRadius:8, flex:1}}>
              <Icon name="music" size={20} color="green" style={{marginLeft:15,marginTop:15}}/>
              <Text style={{margin:15,    color:'black'}}>Nhạc đang phát</Text>
            </View>
            <View style={{backgroundColor:'white',borderRadius:8, flex:1}}>
              <Icon name="sticky-note-o" size={20} color="purple" style={{marginLeft:15,marginTop:15}}/>
              <Text style={{margin:15,    color:'black'}}>Điều khoản</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{fontSize:19,fontWeight:'bold',margin:10,marginTop:40,color:'black'}}>Hỗ trợ</Text>
          <TouchableOpacity style={{backgroundColor:'white',borderTopLeftRadius: 8,borderTopRightRadius: 8,padding:15,flexDirection:'row'}}>
            <Icon name="star-o" size={17} color="black" style={{marginRight:10,marginTop:1}}/>
            <Text style={styles.textbtn}>Đánh giá đơn hàng</Text>
            <Icon name="angle-right" size={30} color="black" style={{color:'black',fontSize:20,position: 'absolute',right: 10,top:15}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'white',borderBottomLeftRadius: 8,borderBottomRightRadius: 8,padding:15,flexDirection:'row'}}>
            <Icon name="square-o" size={17} color="black" style={{marginRight:10,marginTop:1}}/>
            <Text style={styles.textbtn}>Liên hệ và góp ý</Text>
            <Icon name="angle-right" size={30} color="black" style={{color:'black',fontSize:20,position: 'absolute',right: 10,top:15}}/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize:19,fontWeight:'bold',margin:10,marginTop:40,color:'black'}}>Tài khoản</Text>
          <TouchableOpacity style={{backgroundColor:'white',borderTopLeftRadius: 8,borderTopRightRadius: 8,padding:15,flexDirection:'row',borderBottomWidth:0.2}}>
             <Icon name="user-o" size={17} color="black" style={{marginRight:10,marginTop:1}}/>
            <Text style={styles.textbtn}>Thông tin cá nhân</Text>
            <Icon name="angle-right" size={30} color="black" style={{color:'black',fontSize:20,position: 'absolute',right: 10,top:15}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'white',borderBottomWidth:0.2,padding:15,flexDirection:'row'}}>
            <Icon name="bookmark-o" size={17} color="black" style={{marginRight:10,marginTop:1}}/>
            <Text style={styles.textbtn}>Địa chỉ đã lưu</Text>
            <Icon name="angle-right" size={30} color="black" style={{color:'black',fontSize:20,position: 'absolute',right: 10,top:15}}/>
          </TouchableOpacity >
          <TouchableOpacity style={{backgroundColor:'white',borderBottomWidth:0.2,padding:15,flexDirection:'row'}}>
            <Icon name="gear" size={17} color="black" style={{marginRight:10,marginTop:1}}/>
            <Text style={styles.textbtn}>Cài đặt</Text>
            <Icon name="angle-right" size={30} color="black" style={{color:'black',fontSize:20,position: 'absolute',right: 10,top:15}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'white',borderBottomLeftRadius: 8,borderBottomRightRadius: 8,padding:15,flexDirection:'row',marginBottom:20}}>
            <Icon name="sign-out" size={17} color="black" style={{marginRight:10,marginTop:1}}/>
            <Text style={styles.textbtn}>Đăng xuất</Text>
            <Icon name="angle-right" size={30} color="black" style={{color:'black',fontSize:20,position: 'absolute',right: 10,top:15}}/>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#CBCECE',
  
  },
  textbtn:{
    fontSize:15,
    color:'black'
  }
})