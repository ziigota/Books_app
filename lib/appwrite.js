import { Client, Account, Avatars, Storage  } from 'react-native-appwrite';
import 'react-native-url-polyfill/auto';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6add0cdf000f029e873c')
    .setPlatform('dev.ziigota.dooksapp');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);
