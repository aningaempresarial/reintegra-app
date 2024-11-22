import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { clear, removeItem } from "../functions/AsyncStorage";

export function Navbar() {
    const navigation = useNavigation();

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

            <Pressable style={styles.logoContainer} onPress={() => navigation.replace('Home')}>
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

                        <Pressable style={styles.itemMenu} onPress={() => navigation.navigate('Home')}>
                            <Icon name='home-outline' size={40} />
                            <Text style={styles.item}>Início</Text>
                        </Pressable>
                        <Pressable style={styles.itemMenu} onPress={() => navigation.navigate('Chats')}>
                            <Icon name='chatbubble-outline' size={40} />
                            <Text style={styles.item}>Mensagens</Text>
                        </Pressable>
                        <Pressable style={styles.itemMenu} onPress={() => navigation.navigate('CompletarCurriculo')}>
                            <Icon name='clipboard-outline' size={40} />
                            <Text style={styles.item}>Currículo</Text>
                        </Pressable>
                        <Pressable style={styles.itemMenu} onPress={() => navigation.navigate('Vagas')}>
                            <Icon name='briefcase-outline' size={40} />
                            <Text style={styles.item}>Vagas</Text>
                        </Pressable>
                        <Pressable style={styles.itemMenu} onPress={() => navigation.navigate('Configuracoes')}>
                            <Icon name='cog-outline' size={40} />
                            <Text style={styles.item}>Configurações</Text>
                        </Pressable>

                        <Pressable style={styles.exitButton} onPress={() => {
                            closeModal()

                            removeItem('token')
                            clear()

                            navigation.navigate('Start')
                        }}>
                            <Icon name='exit-outline' size={40} />
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
        marginBottom: 10
    },
    exitButton: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    itemMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    item: {
        fontSize: 25,
        padding: 10
    }
});
