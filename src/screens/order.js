import React, {useState} from 'react'
import { View, Text,TouchableOpacity,Image,FlatList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function order() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return (
    <View>
      <View style={{flexDirection:'row',backgroundColor:'white'}}>
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Thực đơn"
            placeholderStyle={{
              color: "grey",
              fontWeight: "bold"
            }}
            dropDownContainerStyle={{
              backgroundColor: "#dfdfdf",
              marginLeft:15,
              borderWidth:0,
              width:280
            }}
            style={{backgroundColor:'#e3e3e3',borderWidth:0,borderRadius:10,marginLeft:15,marginBottom:15,width:280,height:40}}
          />
        </View>
        <TouchableOpacity style={{backgroundColor:'#e3e3e3',borderWidth:0,borderRadius:10,height:40,width:40,justifyContent:'center',marginLeft:5}}>
          <Icon name="search" size={20} color="black" style={{alignSelf:'center'}} />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#e3e3e3',borderWidth:0,borderRadius:10,height:40,width:40,justifyContent:'center',marginLeft:5}}>
          <Icon name="heart-o" size={20} color="black" style={{alignSelf:'center'}} />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'#e3e3e3'}}>
        
      </View>
    </View>
    
  )
}
