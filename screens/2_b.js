import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../img/usb.png')}
                    style={{
                        width: '80px',
                        height: '80px',
                        margin: '10px',
                    }
                    }></Image>
                <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View style={styles.section}>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px' }}>Cực kỳ hài lòng</Text>
                <View style={styles.star}>
                    <Image source={require('../img/Star 1.png')} style={{ width: '40px', height: '40px', margin: '10px' }}></Image>
                    <Image source={require('../img/Star 1.png')} style={{ width: '40px', height: '40px', margin: '10px' }}></Image>
                    <Image source={require('../img/Star 1.png')} style={{ width: '40px', height: '40px', margin: '10px' }}></Image>
                    <Image source={require('../img/Star 1.png')} style={{ width: '40px', height: '40px', margin: '10px' }}></Image>
                    <Image source={require('../img/Star 1.png')} style={{ width: '40px', height: '40px', margin: '10px' }}></Image>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../img/camera.png')}
                        style={{
                            width: '40px',
                            height: '40px',
                            marginRight:'20px'
                        }} ></Image>
                    <Text style={{ fontSize: '25px', fontWeight: 'bold' }}>Thêm hình ảnh</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

    },
    header: {
        flex: 3,
        flexDirection: 'row',

    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    star: {
        flexDirection: 'row',
    },
    button:{
        margin:'10px',
        padding:'20px',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'blue',
    }
});