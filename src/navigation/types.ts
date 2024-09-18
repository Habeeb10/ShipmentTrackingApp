import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  ShipmentStatus: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
