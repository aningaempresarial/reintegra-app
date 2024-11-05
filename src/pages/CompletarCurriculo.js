import React, { useEffect, useState } from 'react';
import createStyle from '../styles/CompletarCurriculo';
import Input from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../functions/AsyncStorage';
import axios from 'axios';
import { API_URL } from '../constraints';
import * as ImagePicker from 'expo-image-picker';
import { calcularTempoEntreDatas } from '../functions/calcularTempoEntreDatas';
import DateTimePicker from '@react-native-community/datetimepicker';

const CompletarCurriculo = () => {
    const [selectedGrauEscolaridade, setSelectedGrauEscolaridade] = useState('');
    const navigation = useNavigation();
    const [fontSize, setFontSize] = useState(null);

    const [curriculo, setCurriculo] = useState({
        idExDetento: 0,
        cepExDetento: '',
        logradouroExDetento: '',
        bairroExDetento: '',
        cidadeExDetento: '',
        estadoExDetento: '',
        escolaridadeExDetento: '',
        numFoneExDetento: '',
        experiencias: []
    });

    async function sentData() {
        const token = await getItem('token');
        const formData = new FormData();

        formData.append('token', token);
        formData.append('idExDetento', curriculo.idExDetento);
        formData.append('cepExDetento', curriculo.cepExDetento);
        formData.append('logradouroExDetento', curriculo.logradouroExDetento);
        formData.append('bairroExDetento', curriculo.bairroExDetento);
        formData.append('cidadeExDetento', curriculo.cidadeExDetento);
        formData.append('estadoExDetento', curriculo.estadoExDetento);
        formData.append('escolaridadeExDetento', curriculo.escolaridadeExDetento);
        formData.append('numFoneExDetento', curriculo.numFoneExDetento);
        formData.append('experiencias', JSON.stringify(curriculo.experiencias));

        axios.put(`${API_URL}/exDetento/info-curriculo`, formData, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then(res => {

        })
        .catch(err => {
            console.error(err);
        });
    }


    useEffect(() => {
        if (curriculo.idExDetento != 0) {
            sentData()
        }
    }, [JSON.stringify(curriculo)])


    async function fetchDados() {
        const token = await getItem('token');
        const formData = new FormData();
        formData.append('token', token);

        axios.post(`${API_URL}/exDetento/info-curriculo`, formData, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then(res => {
            setCurriculo(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }

    const [cargo, setCargo] = useState({
        indiceCargo: null,
        nomeCargoExperiencia: '',
        nomeEmpresaExperiencia: '',
        dataInicio: new Date(),
        dataFim: new Date()
    })

    const [usuario, setUsuario] = useState({
        nomeExDetento: '',
        cpfExDetento: '12345678900',
        sexoExDetento: null,
        dataNascExDetento: null,
        logradouroExDetento: null,
        numExDetento: null,
        cepExDetento: null,
        bairroExDetento: null,
        cidadeExDetento: null,
        estadoExDetento: null,
        outrasInformacoesCurriculo: null,
        usuario: null,
        emailUsuario: null,
        fotoPerfil: null,
        bannerPerfil: null
    });

    function formataCPF(cpf){
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
      

    const [photoURI, setPhotoURI] = useState(null);

    const formatarData = (dataISO) => {
        const data = new Date(dataISO);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    const pickImage = async () => {

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (!permissionResult.granted) {
            alert("Permissão para acessar a galeria é necessária!");
            return;
        }
        
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        if (!result.canceled) {
            console.log(result.assets[0].uri);
            setPhotoURI(result.assets[0].uri);


            const formData = new FormData();

            formData.append('foto', {
                uri: result.assets[0].uri,
                name: 'foto.jpg',
                type: 'image/jpeg',
            });
            
            console.log(`${API_URL}/perfil/usuario/${usuario.usuario}`);
            
            axios.put(`${API_URL}/perfil/usuario/${usuario.usuario}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                console.log("Resposta do servidor:", res.data);
            })
            .catch(err => {
                console.error("Erro:", err);
            });
        }
    };

    const [timestamp, setTimestamp] = useState(new Date().getTime());

    async function getLastUpdate() {
        const lastupdate = await getItem('lastupdate');
        setTimestamp(lastupdate);
    }

    useEffect(() => {
        getLastUpdate();
    }, [])

    useEffect(() => {
        async function fetchFontSize() {
          const size = await getItem('fontSize');
          if (!size) {
            await setItem('fontSize', 18);
            setFontSize(18);
          } else {
            setFontSize(size);
          }
        }
        fetchFontSize();
        fetchDados();

        async function fetchUserData() {

            const token = await getItem('token');

            const formData = new FormData();
            formData.append('token', token);

            axios.post(`${API_URL}/exDetento/info`, formData, { headers: { 'Content-Type': 'multipart/form-data' }})
            .then(res => {
                setPhotoURI(`${API_URL}${res.data.fotoPerfil}?t=${timestamp}`)
                setUsuario(res.data);
            })
            .catch(e => {
                console.error(e)
            })

        }

        fetchUserData();
    }, []);

    const validateField = (field, value) => {
        if (value) {
            if (value != '') {
                switch (field) {
                    case 'numFoneExDetento':
                        return value.length === 15;
                    case 'cepExDetento':
                        return value.length === 9;
                    default:
                        return value.length > 0;
                }
            }
            return false;
        }
        return false;
    };

    const getBorderColor = (field, value) => validateField(field, value) ? 'green' : 'red';

    const formatPhone = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, 15);
    };

    const formatCEP = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, 9);
    };

 

    const handleChangeCargoEdicao = (field, value) => {
        setCargo(prevCargo => ({
            ...prevCargo,
            [field]: value
        }))
    }

    const handleChange = (field, value) => {
        let formattedValue = value;
        if (field === 'numFoneExDetento') {
            formattedValue = formatPhone(value);
        } else if (field === 'cepExDetento') {
            formattedValue = formatCEP(value);
        }

        setCurriculo(prevCurriculo => ({
            ...prevCurriculo,
            [field]: formattedValue
        }));
    };

    const [showDtInicio, setShowDtInicio] = useState(false);
    const [showDtFim, setShowDtFim] = useState(false);

    const [modal, setModal] = useState(false);

    const styles = createStyle(fontSize);

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <ScrollView style={{ width: '100%', backgroundColor: '#f5f8ff' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={[styles.header, { width: '90%' }]}>
                    <Text style={styles.title}>Completar Currículo</Text>
                    <Text style={styles.subtitle}>Verifique se os campos abaixo estão preenchidos corretamente</Text>
                </View>

                <View style={styles.main}>

                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '90%' }}>

                            <View style={styles.imgEditContainer}>
                                <Image style={styles.imgEdit} source={{ uri: photoURI }} />
                                <Pressable style={{ backgroundColor: 'black', width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 80, bottom: 0 }} onPress={pickImage}>
                                    <Icon name={"camera-outline"} style={{ color: 'white' }} size={30} />
                                </Pressable>
                            </View>
                            <View>
                                {/* <Text style={styles.nome}>{usuario.nomeExDetento.split(' ')[0]} {usuario.nomeExDetento.split(' ')[usuario.nomeExDetento.split(' ').length-1]}</Text> */}
                                <View>
                                    <Text style={{fontSize: fontSize+4, fontWeight: '500', marginTop: 15, width: '100%', textAlign: 'center'}}>Dados Pessoais</Text>
                        
                                    <View style={styles.line} />

                                    <Input
                                        label={'Nome Completo'}
                                        value={usuario.nomeExDetento}
                                        style={{ width: '90%', fontSize }}
                                        estilo={{ fontSize }}
                                        editable={false}
                                    />
                                    <Input
                                        label={'CPF'}
                                        value={formataCPF(usuario.cpfExDetento)}
                                        style={{ width: '90%', fontSize }}
                                        estilo={{ fontSize }}
                                        editable={false}
                                    />
                                    <Input
                                        label={'Data de Nascimento'}
                                        value={formatarData(usuario.dataNascExDetento)}
                                        style={{ width: '90%', fontSize }}
                                        estilo={{ fontSize }}
                                        editable={false}
                                    />
                                    <Input
                                        label={'Sexo'}
                                        value={usuario.sexoExDetento}
                                        style={{ width: '90%', fontSize }}
                                        estilo={{ fontSize }}
                                        editable={false}
                                    />
                        
                                </View>


                                <Text style={{fontSize: fontSize+4, fontWeight: '500', marginTop: 15, width: '100%', textAlign: 'center'}}>Contato</Text>
                                <View style={styles.line} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Input
                            label={'Telefone'}
                            placeholder={'Digite seu telefone com DDD'}
                            value={curriculo.numFoneExDetento}
                            onChangeText={(text) => handleChange('numFoneExDetento', text)}
                            onBlur={() => sentData()}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: getBorderColor('numFoneExDetento', curriculo.numFoneExDetento), fontSize }}
                            keyboardType="numeric"
                        />

                        <Input
                            label={'CEP'}
                            placeholder={'Digite o CEP da sua casa'}
                            value={curriculo.cepExDetento}
                            onChangeText={(text) => handleChange('cepExDetento', text)}
                            onBlur={(text) => {
                                axios.get(`https://viacep.com.br/ws/${curriculo.cepExDetento.replaceAll('-', '')}/json/`)
                                .then(res => {
                                    const data = res.data
                                    handleChange('logradouroExDetento', data.logradouro)
                                    handleChange('cidadeExDetento', data.localidade)
                                    handleChange('estadoExDetento', data.uf)
                                    handleChange('bairroExDetento', data.bairro)

                                    sentData();
                                })
                                .catch(err => {
                                    console.error(err)
                                })
                            }}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: getBorderColor('cepExDetento', curriculo.cepExDetento), fontSize }}
                            keyboardType="numeric"
                        />

                        <Input
                            label={'Rua'}
                            placeholder={'Digite o nome da rua'}
                            value={curriculo.logradouroExDetento}
                            onBlur={() => sentData()}
                            onChangeText={(text) => handleChange('logradouroExDetento', text)}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: getBorderColor('logradouroExDetento', curriculo.logradouroExDetento), fontSize }}
                        />

                        <Input
                            label={'Bairro'}
                            placeholder={'Digite o nome do bairro'}
                            value={curriculo.bairroExDetento}
                            onBlur={() => sentData()}
                            onChangeText={(text) => handleChange('bairroExDetento', text)}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: getBorderColor('bairroExDetento', curriculo.bairroExDetento), fontSize }}
                        />

                        <Input
                            label={'Cidade'}
                            placeholder={'Digite o nome da cidade'}
                            onBlur={() => sentData()}
                            value={curriculo.cidadeExDetento}
                            onChangeText={(text) => handleChange('cidadeExDetento', text)}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: getBorderColor('cidadeExDetento', curriculo.cidadeExDetento), fontSize }}
                        />


                        <SelectInput
                            label="Estado"
                            selectedValue={curriculo.estadoExDetento}
                            onValueChange={(value) => {
                                handleChange('estadoExDetento', value);
                            }}
                            estilo={{ borderColor: getBorderColor('estadoExDetento', curriculo.estadoExDetento), fontSize }}
                            options={[
                                { label: 'Selecione...', value: '' },
                                { label: 'AC', value: 'AC' },
                                { label: 'AL', value: 'AL' },
                                { label: 'AP', value: 'AP' },
                                { label: 'AM', value: 'AM' },
                                { label: 'BA', value: 'BA' },
                                { label: 'CE', value: 'CE' },
                                { label: 'DF', value: 'DF' },
                                { label: 'ES', value: 'ES' },
                                { label: 'GO', value: 'GO' },
                                { label: 'MA', value: 'MA' },
                                { label: 'MT', value: 'MT' },
                                { label: 'MS', value: 'MS' },
                                { label: 'MG', value: 'MG' },
                                { label: 'PA', value: 'PA' },
                                { label: 'PB', value: 'PB' },
                                { label: 'PR', value: 'PR' },
                                { label: 'PE', value: 'PE' },
                                { label: 'PI', value: 'PI' },
                                { label: 'RJ', value: 'RJ' },
                                { label: 'RN', value: 'RN' },
                                { label: 'RS', value: 'RS' },
                                { label: 'RO', value: 'RO' },
                                { label: 'RR', value: 'RR' },
                                { label: 'SC', value: 'SC' },
                                { label: 'SP', value: 'SP' },
                                { label: 'SE', value: 'SE' },
                                { label: 'TO', value: 'TO' },
                            ]}
                        />


                        <Text style={{fontSize: fontSize+4, fontWeight: '500', marginTop: 15, width: '90%', textAlign: 'center'}}>Informações Profissionais</Text>
                        <View style={[styles.line, {width: '90%'}]} />

                        <SelectInput
                            label="Escolaridade"
                            selectedValue={curriculo.escolaridadeExDetento}
                            onValueChange={(value) => {
                                handleChange('escolaridadeExDetento', value);
                            }}
                            estilo={{ borderColor: getBorderColor('escolaridadeExDetento', curriculo.escolaridadeExDetento), fontSize }}
                            options={[
                                { label: 'Selecione...', value: '' },
                                { label: 'Fundamental 1 incompleto (1° ao 5° ano)', value: 'Fundamental 1 incompleto (1° ao 5° ano)' },
                                { label: 'Fundamental 1 completo (1° ao 5° ano)', value: 'Fundamental 1 completo (1° ao 5° ano)' },
                                { label: 'Fundamental 2 incompleto (6° ao 9° ano)', value: 'Fundamental 2 incompleto (6° ao 9° ano)' },
                                { label: 'Fundamental 2 completo (6° ao 9° ano)', value: 'Fundamental 2 completo (6° ao 9° ano)' },
                                { label: 'Ensino Médio incompleto', value: 'Ensino Médio incompleto' },
                                { label: 'Ensino Médio completo', value: 'Ensino Médio completo' },
                                { label: 'Ensino Superior incompleto', value: 'Ensino Superior incompleto' },
                                { label: 'Ensino Superior completo', value: 'Ensino Superior completo' },
                            ]}
                        />

                        <Text style={{ width: '90%', fontSize, margin: 10 }}>Experiência Profissional</Text>

                        <View style={styles.viewExperiencias}>
                            {curriculo.experiencias.map((experiencia, i) => (
                                <View key={i} style={styles.profissoes}>
                                    <View style={styles.par}>
                                        <Text style={styles.atributo}>Cargo</Text>
                                        <Text style={styles.elemento}>{experiencia.nomeCargoExperiencia}</Text>
                                    </View>
                                    <View style={styles.par}>
                                        <Text style={styles.atributo}>Empresa</Text>
                                        <Text style={styles.elemento}>{experiencia.nomeEmpresaExperiencia}</Text>
                                    </View>
                                    <View style={styles.par}>
                                        <Text style={styles.atributo}>Tempo</Text>
                                        <Text style={styles.elemento}>{calcularTempoEntreDatas(experiencia.dataInicio, experiencia.dataFim)}</Text>
                                    </View>
                                    <View style={styles.par}>
                                        <Icon name={'trash-outline'} color={'red'} size={25} onPress={() => {
                                            setCurriculo((prevCurriculo) => ({
                                                ...prevCurriculo,
                                                experiencias: [
                                                    ...prevCurriculo.experiencias.slice(0, i),
                                                    ...prevCurriculo.experiencias.slice(i + 1)
                                                ]
                                            }));
                                        }} />
                                        <Icon name={'create-outline'} color={'blue'} size={25} onPress={() => {
                                            setCargo({...experiencia, dataInicio: new Date(experiencia.dataInicio), dataFim: new Date(experiencia.dataFim), indiceCargo: i});
                                            setModal(true);
                                        }} />
                                    </View> 
                                    {i < curriculo.experiencias.length - 1 && (
                                        <View style={styles.line} />
                                    )}
                                </View>
                            ))}
                        </View>

                        <View style={{ width: '90%', marginTop: 15 }}>
                            <Pressable style={styles.experienciaProfissionalButton} onPress={() => setModal(true)}>
                                <Icon color={'white'} name={'add-outline'} size={28} />
                                <Text style={styles.textoButton}>Adicionar Experiência</Text>
                            </Pressable>
                        </View>
                
                    </View>
                
        
                </View>
            </ScrollView>

            <Modal
                visible={modal}
            >

                <View style={[styles.container, { justifyContent: 'flex-start' } ]}>


                    <Text style={{ width: '90%', fontSize: 24, fontWeight: 'bold', margin: 10 }}>Experiência Profissional</Text>

                    <View style={{ width: '90%' }}>
                        <Input
                            label={'Cargo'}
                            placeholder={'Digite o nome da cargo'}
                            value={cargo.nomeCargoExperiencia}
                            onChangeText={(text) => handleChangeCargoEdicao('nomeCargoExperiencia', text)}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: getBorderColor('nomeCargoExperiencia', cargo.nomeCargoExperiencia), fontSize }}
                        />
                        <Input
                            label={'Empresa'}
                            placeholder={'Digite o nome da empresa'}
                            value={cargo.nomeEmpresaExperiencia}
                            onChangeText={(text) => handleChangeCargoEdicao('nomeEmpresaExperiencia', text)}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: getBorderColor('nomeEmpresaExperiencia', cargo.nomeEmpresaExperiencia), fontSize }}
                        />

                        <Input
                            label={'Data Inicio'}
                            placeholder={'Digite a data que você entrou no cargo'}
                            value={cargo.dataInicio.toLocaleString('pt-BR').substr(0, 10)}
                            onPress={() => setShowDtInicio(true)}
                            onChangeText={(text) => handleChangeCargoEdicao('dataInicio', text)}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: (cargo.dataInicio == cargo.dataFim) ? 'red' : 'green', fontSize }}
                        />

                        {showDtInicio && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={cargo.dataInicio}
                            mode='date'

                            onChange={(event, selectedDate) => {
                                setShowDtInicio(false);
                                handleChangeCargoEdicao('dataInicio', selectedDate);
                            }}
                            />
                        )}

                        <Input
                            label={'Data Fim'}
                            placeholder={'Digite a data que você entrou no cargo'}
                            value={cargo.dataFim.toLocaleString('pt-BR').substr(0, 10)}
                            onPress={() => setShowDtFim(true)}
                            onChangeText={(text) => handleChangeCargoEdicao('dataFim', text)}
                            style={{ width: '90%', fontSize }}
                            estilo={{ borderColor: (cargo.dataInicio == cargo.dataFim) ? 'red' : 'green', fontSize }}
                        />

                        {showDtFim && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={cargo.dataFim}
                            mode='date'

                            onChange={(event, selectedDate) => {
                                setShowDtFim(false);
                                handleChangeCargoEdicao('dataFim', selectedDate);
                            }}
                            />
                        )}

                        <View style={[styles.botoes, { marginTop: 20 }]}>
                            <Pressable style={[styles.button2, {borderColor: 'red', marginRight: '5%' }]} >
                                <Text style={[styles.buttonText, { color: 'red' }]} onPress={() => {
                                    setModal(false);
                                    setCargo({
                                        indiceCargo: null,
                                        nomeCargoExperiencia: '',
                                        nomeEmpresaExperiencia: '',
                                        dataInicio: new Date(),
                                        dataFim: new Date()
                                    });
                                }}>Cancelar</Text>
                            </Pressable>
                            <Pressable style={[styles.button1, { backgroundColor: 'green' }]} onPress={() => {
                                console.log(cargo)
                                if (cargo.indiceCargo == null) {
                                    curriculo.experiencias.push(cargo);
                                } else {
                                    curriculo.experiencias[cargo.indiceCargo] = cargo;
                                }


                                setModal(false);
                                setCargo({
                                    indiceCargo: null,
                                    nomeCargoExperiencia: '',
                                    nomeEmpresaExperiencia: '',
                                    dataInicio: new Date(),
                                    dataFim: new Date()
                                });
                            }}>
                                <Text style={styles.buttonText}>Salvar</Text>
                            </Pressable>
                        </View>


                    </View>
                
                </View>

            </Modal>

        </SafeAreaView>
    );
};


export default CompletarCurriculo;
