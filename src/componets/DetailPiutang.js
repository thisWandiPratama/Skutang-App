// imprt component
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


//class atau function component
class DetailPuitang extends React.Component {
    render() {
        return (
            // kumpulan component react native
            <View style={{ flex: 1, backgroundColor: "#51C9FA", }}>
                <View style={{ backgroundColor: "#A6EFF9", height: 50, width: "100%", flexDirection: "row", alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                        <Image source={{ uri: "https://i.ibb.co/ykP060w/left-arrow-1.png" }}
                            style={{ height: 25, width: 25, marginLeft: 10, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "#000" }}>Detail Piutang</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <View style={{ width: "90%", alignItems: "center", height: "90%" }}>
                        <View style={{
                            width: "90%", height: 200, backgroundColor: "#fff", shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,

                            elevation: 6,
                            marginTop: 30,
                            borderRadius: 5,
                            height: "52%"
                        }}>
                            <View style={{ height: 30, margin: 10, marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 14 }}>Piutang 1</Text>
                                <Text style={{ color: "#FE0202", fontSize: 14, fontWeight: "bold" }}>Rp203.2</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, margin: 10, marginTop: 0, borderBottomColor: "#999" }}>
                                <Text style={{ color: "#999", fontSize: 12 }} >Nama</Text>
                                <Text style={{ color: "#000", fontSize: 14, fontWeight: 'bold' }}>Shafwan</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, margin: 10, marginTop: 0, borderBottomColor: "#999" }}>
                                <Text style={{ color: "#999", fontSize: 12 }} >Alamat</Text>
                                <Text style={{ color: "#000", fontSize: 14, fontWeight: 'bold' }}>Yogyakarta</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, margin: 10, marginTop: 0, borderBottomColor: "#999" }}>
                                <Text style={{ color: "#999", fontSize: 12 }} >Email</Text>
                                <Text style={{ color: "#000", fontSize: 14, fontWeight: 'bold' }}>Shafwan@gmail.com</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, margin: 10, marginTop: 0, borderBottomColor: "#999" }}>
                                <Text style={{ color: "#999", fontSize: 12 }} >Deadline</Text>
                                <Text style={{ color: "#000", fontSize: 14, fontWeight: 'bold' }}>02/03/2022</Text>
                            </View>
                            <View
                                style={{ height: 20, width: 20, backgroundColor: "red", alignItems: "center", justifyContent: 'center', borderRadius: 10, position: "absolute", bottom:45, right: 8,}}>
                                <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>+</Text>
                            </View>
                            <TouchableOpacity style={{ alignItems: "flex-end", marginRight: 20 }} >
                                <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }} >Cicilan</Text>
                                <Text style={{ color: "#FE0202", fontSize: 14, fontWeight: "bold" }}>Rp1000</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            width: "90%", height: 200, backgroundColor: "#00FF38", shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,

                            elevation: 6,
                            marginTop: 30,
                            borderRadius: 5,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>Tandai Lunas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
// memberikan izin terhadap class atau component yg diatas export 
export default DetailPuitang