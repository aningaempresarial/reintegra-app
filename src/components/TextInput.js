import { StyleSheet, TextInput, View, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";

export default function Input({label, estilo, ...props}) {
    return <View>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputContainer, estilo]}>
        <TextInput 
            style={styles.txtInput}
            {...props}
        />
      </View>
    </View>
  }

const styles = StyleSheet.create({
    label: {
        marginVertical: 10,
        fontSize: 15,
        color: '#000000'
    },
    inputContainer: {
        height: 55,
        borderStyle: 'solid',
        borderColor: '#d2d4d9',
        borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 5
    },
    txtInput: {
        flex: 1, 
        height: '90%',
        paddingHorizontal: 20,
        color: '#000000',
        fontSize: 30,
    }
})