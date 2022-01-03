// imprt component
import React from 'react'
import {View, Text, Image} from 'react-native'


//class atau function component
class TampilanAwal extends React.Component{

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace("Login")
        }, 3000);
    }

  render(){
    return (
      // kumpulan component react native
      <View
      style={{
          flex: 1,
          backgroundColor : '#4EC4FA',
          alignItems: 'center',
          justifyContent:'center'
      }}
      >
          <Image
          source={{uri: 'https://i.ibb.co/zbpwjh4/Pics-Art-12-16-08-55-51.png'}}
          style={{
              height: 200,
              width: 200
          }}
          />   
      </View>
    )
  }
}
// memberikan izin terhadap class atau component yg diatas export 
export default TampilanAwal