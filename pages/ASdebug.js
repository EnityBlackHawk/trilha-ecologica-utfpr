import { Button, TextInput, View } from "react-native";
import { useState } from "react";
import { addFlora, readFlora, removeFloraAll } from "../asyncStorage";

export function ASdebug() {

    const [dataInput, setDataInput] = useState("")

    const addData = () => {
        addFlora(dataInput)
    }

    const logData = async () => {
        console.log(await readFlora())
    }

    const removeAllData = () => {
        removeFloraAll()
    }

    return (
      <View>
        <TextInput placeholder="Data" value={dataInput} onChangeText={setDataInput} />
        <Button title="Add data" onPress={addData}/>
        <Button title="Log data" onPress={logData}/>
        <Button title="Remove all data" onPress={removeAllData}/>
      </View>
    );
}