import { Client, Account, Avatars } from 'react-native-appwrite';
import 'react-native-url-polyfill/auto'; // Обязательно для корректной работы на Android

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Ваш Endpoint (из скриншота)
    .setProject('6add0cdf000f029e873c') // Ваш Project ID (из скриншота)
    .setPlatform('dev.ziigota.dooksapp'); // ВАЖНО: Укажите ваш package name

export const account = new Account(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);
