import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class ContentDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#51C9FA" }}>
                <View style={{ height: 200, width: "100%", alignItems: "center", justifyContent: 'center', }}>
                    <Image
                        source={{ uri: "https://i.ibb.co/1MFWNFm/user.png" }}
                        style={{ height: 120, width: 120 }}
                    />
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>Nama</Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }} >Alamat</Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }} >Email</Text>
                    <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }} >Whatsapp</Text>
                </View>
                <TouchableOpacity onPress={() => alert()} style={{ height: 40, width: 100, backgroundColor: "#346BFB", alignItems: 'center', justifyContent: 'center', borderRadius: 10, position: "absolute", bottom: 10, right: 10 }} >
                    <Text style={{ fontSize: 25, color: "#fff", fontWeight: "bold" }} >Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ContentDrawer;
