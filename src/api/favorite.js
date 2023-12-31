import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";


export const addPokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem("favorite", JSON.stringify(favorites));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getPokemonFavoriteApi = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorite");
    if (!favorites) {
      return [];
    }
    return JSON.parse(favorites);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const isPokemonFavorite = async (id) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    return includes(favorites, id);
  } catch (error) {
    throw error;
  }
};

export const removePokemonFavorite = async (id) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem("favorite", JSON.stringify(newFavorites));
  } catch (error) {
    console.log(error);
    throw error;
  }
}
