import AsyncStorage from "@react-native-async-storage/async-storage";
import LocalStorageService from "../services/LocalStorageService";

export const getDataFromLocalStorage = async (key) => {
  try {
    const data = await LocalStorageService.read(key);
    return data;
  } catch (error) {
    console.error(
      `Error while reading data from LocalStorage for key ${key}:`,
      error
    );
    return null;
  }
};

export const saveDataToLocalStorage = async (data, key) => {
  try {
    await LocalStorageService.save(key, data);
    return data;
  } catch (error) {
    console.error(
      `Error while saving data to LocalStorage for key ${key}:`,
      error
    );
    return null;
  }
};

export const AutoClearLocalStorage = async (storageKey) => {
  try {
    // Get the data stored in AsyncStorage with the specified key
    const data = await AsyncStorage.getItem(storageKey);

    if (data !== null) {
      // Clear the data if it exists
      await AsyncStorage.removeItem(storageKey);
      console.log(`Cleared data with key "${storageKey}" from AsyncStorage.`);
    } else {
      console.log(`No data found with key "${storageKey}" in AsyncStorage.`);
    }
  } catch (error) {
    console.error(
      `Error clearing data with key "${storageKey}" from AsyncStorage:`,
      error
    );
  }
};
