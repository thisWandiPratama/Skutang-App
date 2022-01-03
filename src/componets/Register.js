// imprt component
import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'


//class atau function component
class Register extends React.Component {
    render() {
        return (
            // kumpulan component react native
            <View
                style={{
                    flex: 1,
                }}
            >
                <View style={{
                    height: 50,
                    backgroundColor: '#A6EFF9',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            marginRight: 7,
                            marginLeft: 4
                        }}
                    >
                        <Image
                            source={{
                                uri: 'https://i.ibb.co/ftNQNwh/left-arrow-1.png'
                            }}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}
                    >Daftar Akun</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#4EC4FA',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Image
                        source={{ uri: 'https://i.ibb.co/2KRB6XX/Pics-Art-12-15-02-55-1.png' }}
                        style={{
                            height: 50,
                            width: 200,
                            resizeMode: 'contain'
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
                                placeholder='Nama Lengkap'

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
                                placeholder='Email'

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
                                placeholder='Password'

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
                                placeholder='No WhatsApp'

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
                                placeholder='Alamat Lengkap'

                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        // onPress={}

                        style={{
                            backgroundColor: '#65C8D6',
                            height: 50,
                            width: '60%',
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#4CA28D',
                            marginBottom: 100
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#000',
                                fontWeight: 'bold'
                            }}
                        >Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
// memberikan izin terhadap class atau component yg diatas export 
export default Register