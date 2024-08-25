
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, TextInput, View, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";

export default function SelectInput({label, selectedValue, onValueChange, options, ...props}) {
    return <View>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputContainer]}>
            <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    style={styles.txtInput}
                >
                    {options.map((option, index) => (
                        <Picker.Item key={index} style={styles.txtInput} label={option.label} value={option.value} />
                    ))}
            </Picker>
      </View>
    </View>
  }

const styles = StyleSheet.create({
    label: {
        marginVertical: 10,
        fontSize: 15,
        color: '#000000',
        width: '100%'
    },
    inputContainer: {
        height: 55,
        borderStyle: 'solid',
        borderColor: '#d2d4d9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        width: '90%'
    },
    txtInput: {
        flex: 1, 
        height: '90%',
        paddingHorizontal: 20,
        color: '#000000',
        fontSize: 15,
    }
})