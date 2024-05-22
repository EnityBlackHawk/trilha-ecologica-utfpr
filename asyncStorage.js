import AsyncStorage from "@react-native-async-storage/async-storage";

export const addFlora = async (flora_id) => {
    try {
        const data = JSON.parse(await readFlora()) ?? {data : []};
        data.data.push(flora_id);
        await AsyncStorage.setItem("already_flora", JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
}

export const readFlora = async () => {
    return await AsyncStorage.getItem("already_flora");
}

export const removeFloraAll = async () => {
    return await AsyncStorage.removeItem("already_flora");
}