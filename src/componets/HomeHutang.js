// imprt component
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, TextInput } from 'react-native'


//class atau function component
class HomeHutang extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_modal: false
        }
    }


    renderData = () => {

        var data = []

        for (let index = 0; index < 5; index++) {
            data.push(index)
        }

        return data.map((value, index) => {
            return (
                <View
                    style={{ backgroundColor: "#fff", flexDirection: "row", height: 45, justifyContent: "space-between", alignItems: "center", borderRadius: 5, marginBottom: 5 }}
                >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("DetailHutang")} style={{ height: 45, width: "80%", justifyContent: 'center' }} >
                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 14, paddingLeft: 10 }}>Hutang {index + 1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://i.ibb.co/7S5Bx0y/delete-24px-outlined-1.png" }}
                            style={{ height: 24, width: 24, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                </View>
            )
        })
    }

    render() {
        return (
            // kumpulan component react native
            <View
                style={{ flex: 1, backgroundColor: "#51C9FA" }}
            >
                <ScrollView>
                    <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20 }}>
                        {this.renderData()}
                    </View>

                </ScrollView>
                <TouchableOpacity onPress={() => this.setState({ is_modal: !this.state.is_modal })} style={{ height: 60, width: 60, backgroundColor: "#346BFB", alignItems: 'center', justifyContent: 'center', borderRadius: 40, position: "absolute", bottom: 10, right: 10 }} >
                    <Text style={{ fontSize: 25, color: "#fff", fontWeight: "bold" }} >+</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.is_modal}
                >
                    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: 'center', }}>
                        <View style={{ height: "60%", width: "90%", backgroundColor: "#fff", borderRadius: 10 }}>
                            <TouchableOpacity onPress={() => this.setState({ is_modal: !this.state.is_modal })} style={{ height: 30, width: 30, alignItems: "center", justifyContent: 'center', backgroundColor: "red", borderRadius: 20, position: "absolute", right: -10, top: -10 }}>
                                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>X</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 20, }}>
                                <ScrollView>
                                    <Text style={{ color: "#000", fontSize: 17, fontWeight: "bold" }}>Tambah Hutang</Text>
                                    <TextInput
                                        placeholder='Contoh : Hutang 1'
                                        style={{ height: 50, borderBottomWidth: 1, borderBottomColor: "#999", marginBottom: 5 }}
                                    />
                                    <TextInput
                                        placeholder='Nama Penghutang'
                                        style={{ height: 50, borderBottomWidth: 1, borderBottomColor: "#999", marginBottom: 5 }}
                                    />
                                    <TextInput
                                        placeholder='Alamat'
                                        style={{ height: 50, borderBottomWidth: 1, borderBottomColor: "#999", marginBottom: 5 }}
                                    />
                                    <TextInput
                                        placeholder='Email'
                                        style={{ height: 50, borderBottomWidth: 1, borderBottomColor: "#999", marginBottom: 5 }}
                                    />
                                    <TextInput
                                        placeholder='Deadline - Contoh: Januari,02/01/2021'
                                        style={{ height: 50, borderBottomWidth: 1, borderBottomColor: "#999", marginBottom: 5 }}
                                    />
                                    <View style={{ alignItems: 'center' }}>

                                        <TouchableOpacity style={{ width: "80%", height: 50, backgroundColor: "#51C9FA", alignItems: "center", justifyContent: 'center', marginTop: 20, borderRadius: 20 }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>Simpan</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
// memberikan izin terhadap class atau component yg diatas export 
export default HomeHutang