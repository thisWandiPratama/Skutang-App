// imprt component
import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'


//class atau function component
class Login extends React.Component {
    render() {
        return (
            // kumpulan component react native
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#4EC4FA',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Image
                    source={{ uri: 'https://i.ibb.co/zbpwjh4/Pics-Art-12-16-08-55-51.png' }}
                    style={{
                        height: 200,
                        width: 200
                    }}
                />
                <View
                    style={{
                        width: '95%',
                        alignItems: 'center'
                    }}
                >
                    <View

                        style={{
                            height: 50,
                            width: '80%',
                            backgroundColor: '#A6EFF9',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#4CA28D'
                        }}
                    >
                        <Image
                            source={{ uri: 'https://i.ibb.co/cCK5MdY/EMAIL-LOGO-removebg-preview-2-1.png' }}
                            style={{
                                height: 40,
                                width: 50
                            }}
                        />
                        <TextInput
                            placeholder='Masuk Email Anda'

                        />
                    </View>
                    <View

                        style={{
                            height: 50,
                            width: '80%',
                            backgroundColor: '#A6EFF9',
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#4CA28D'


                        }}
                    >
                        <Image
                            source={{ uri: 'https://i.ibb.co/NVm2HgD/247-2474005-png-file-svg-icon-login-password-clipart-1-2-1.png' }}
                            style={{
                                height: 40,
                                width: 40,
                                marginLeft: 6
                            }}
                        />
                        <TextInput
                            placeholder='Masuk Password Anda'

                        />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.replace("Home")}

                    style={{
                        backgroundColor: '#65C8D6',
                        height: 50,
                        width: '60%',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#4CA28D'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#000',
                            fontWeight: 'bold'
                        }}
                    >Masuk</Text>
                </TouchableOpacity>

                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 20
                    }}
                >
                    <Text>Belum memiliki akun ? </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Register")}
                    >
                        <Text style={{
                            color: '#FFE600',
                            fontWeight: 'bold'
                        }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
// memberikan izin terhadap class atau component yg diatas export 
export default Login