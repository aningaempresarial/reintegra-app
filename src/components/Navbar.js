import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { clear } from "../functions/AsyncStorage";

export function Navbar() {
    const navgation = useNavigation();

    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    }

    const openModal = () => {
        setModal(true)
    }

    return (
        <View style={styles.navbar}>
            <Pressable style={styles.menuContainer} onPress={openModal}>
                <Icon name='menu' size={50} />
            </Pressable>

            <Pressable style={styles.logoContainer} onPress={() => navgation.replace('Home')}>
                <Image style={styles.logo} source={require('../../assets/images/logo_full_quality.png')} />
            </Pressable>

            <View style={{ flex: 1 }}></View>

            <Modal
                visible={modal}
                transparent={true}
                style={styles.modal}
            >
                <Pressable style={styles.modalContainer} onPress={closeModal}>

                    <View style={styles.sidebar}>
                        <Pressable style={styles.closeButton} onPress={closeModal}>
                            <Icon name='close' size={50} />
                        </Pressable>

                        <Pressable style={styles.exitButton} onPress={() => {
                            closeModal()

                            clear()

                            navgation.navigate('Start')
                        }}>
                            <Icon name='exit-outline' size={35} />
                        </Pressable>

                    </View>

                </Pressable>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        paddingTop: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        zIndex: 1
    },
    logoContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0
    },
    logo: {
        resizeMode: 'contain',
        height: 80,
    },
    modal: {
        position: 'absolute',
        width: '100%',
    },
    modalContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    sidebar: {
        backgroundColor: '#fff',
        width: '70%',
        flex: 1,
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    closeButton: {

    },
    exitButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    }
});
