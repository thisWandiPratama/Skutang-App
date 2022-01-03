// imprt component
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'


//class atau function component
class HomeRiwayat extends React.Component {


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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("DetailRiwayat")} style={{ height: 45, width: "80%", justifyContent: 'center' }} >
                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 14, paddingLeft: 10 }}>Piutang {index + 1}</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingRight: 10, fontSize: 14, fontWeight: 'bold', color: "#00FF38" }} >Lunas</Text>
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
            </View>
        )
    }
}
// memberikan izin terhadap class atau component yg diatas export 
export default HomeRiwayat