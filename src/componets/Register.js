// imprt component
import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'


//class atau function component
class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nama_lengkap: "",
            email: "",
            password: "",
            no_whatsapp: "",
            alamat: "",
            isLoading: false
        }
    }


    daftar = () => {
        this.setState({ isLoading: true })
        const { nama_lengkap, email, password, no_whatsapp, alamat } = this.state
        let noAngka = parseInt(no_whatsapp)

        fetch("https://golang-api-skutang.herokuapp.com/api/v1/auth/register", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nama_lengkap,
                email: email,
                password: password,
                no_whatsapp: noAngka,
                alamat: alamat,
            }),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.status === true) {
                    this.setState({ isLoading: false })
                    alert("Register Sukses!")
                    this.props.navigation.goBack()
                } else {
                    this.setState({ isLoading: false })
                    alert("Data Wajib Diisi / Kemungkinan Email Sudah Ada")
                }

            })
            .catch(err => {
                this.setState({ isLoading: false })
                console.log(err)
            })
    }


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
                                onChangeText={(nama_lengkap) => this.setState({ nama_lengkap: nama_lengkap })}

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
                                onChangeText={(email) => this.setState({ email: email })}

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
                                onChangeText={(password) => this.setState({ password: password })}

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
                                onChangeText={(no_whatsapp) => this.setState({ no_whatsapp: no_whatsapp })}

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
                                onChangeText={(alamat) => this.setState({ alamat: alamat })}
                            />
                        </View>

                    </View>
                    {
                        this.state.isLoading === true ?
                            <View style={{
                                backgroundColor: '#65C8D6',
                                height: 50,
                                width: '60%',
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#4CA28D',
                                marginBottom: 100
                            }}>
                                <ActivityIndicator size={"large"} color="red" />
                            </View>
                            :
                            <TouchableOpacity
                                onPress={() => this.daftar()}
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
                    }

                </View>
            </View >
        )
    }
}
// memberikan izin terhadap class atau component yg diatas export 
export default Register