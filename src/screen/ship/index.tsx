import React, {useState, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native';
import {useGetShipmentListQuery} from '../../redux/features/ship/shipmentApi';
import BackButton from '../../common/button/backbutton';
import {CommonStyles} from '../../common/commonStyles/styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types'; // Adjust the path as needed
import SpacerWrapper from '../../common/util/SpaceWrapper';

const ShipmentStatusScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<NavigationProp>(); // Use type-safe navigation

  // Hook to fetch shipment data
  const {data, error, isLoading, refetch} = useGetShipmentListQuery('');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefreshing(false)); // Ensure refreshing state is reset
  }, [refetch]);

  if (isLoading)
    return <Text style={CommonStyles.loadingStyle}>Loading...</Text>;
  if (error)
    return (
      <Text style={CommonStyles.errorText}>Error loading shipment data</Text>
    );

  console.log('Shipment Data:', data); // Debugging statement

  return (
    <SpacerWrapper>
      <View style={CommonStyles.Container}>
        <View style={CommonStyles.backIcon}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.message || []}
          keyExtractor={item => item.barcode.toString()}
          renderItem={({item}) => (
            <View style={CommonStyles.item}>
              <Text>Status: {item.status || 'N/A'}</Text>
              <Text>Shipment ID: {item.barcode || 'N/A'}</Text>
              <Text>Origin: {item.origin_city || 'N/A'}</Text>
              <Text>Destination: {item.destination_city || 'N/A'}</Text>
              <Text>Owner: {item.owner || 'N/A'}</Text>
              <Text>SenderName: {item.sender_name || 'N/A'}</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#ff6347']}
              progressBackgroundColor="#fff"
            />
          }
        />
      </View>
    </SpacerWrapper>
  );
};

const styles = StyleSheet.create({});

export default ShipmentStatusScreen;
