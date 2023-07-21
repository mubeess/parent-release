import AsyncStorage from '@react-native-async-storage/async-storage';
import httpClient from './http-client';

export enum UserTypesEnum {
  PARENT = 'parent',
  STAFF = 'staff',
  STUDENT = 'student',
}

let school_id = '';

const setSchoolId = async (id: string) => {
  school_id = id;
  httpClient.defaults.headers['X-TENANT-ID'] = id;
  await AsyncStorage.setItem('school_id', id);
  console.log('Setting school Id');
};

export { school_id, setSchoolId };
