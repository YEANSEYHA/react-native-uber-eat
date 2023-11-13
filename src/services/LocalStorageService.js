import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalStorageService {
  static async save(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw error;
    }
  }

  static async read(key) {
    try {
      const value = await AsyncStorage.getItem(key);

      return value == null ? null : JSON.parse(value);
    } catch (error) {
      throw error;
    }
  }

  static async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
