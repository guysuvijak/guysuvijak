import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { ApiEntryProps } from './types';
import axios from 'axios';
import styles from './helloStyles';

const HelloScreen = () => {
    const [ data, setData ] = useState<ApiEntryProps[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        getDataAPI();
    }, []);

    const getDataAPI = async () => {
        try {
            const response = await axios.get('https://api.publicapis.org/entries');
            const apiEntries: ApiEntryProps[] = response.data.entries;
            if (apiEntries.length > 0) {
                setData(apiEntries);
            }
        } catch(err) {
            console.log(err);
            Alert.alert('Error', err);
        } finally {
            setIsLoading(false);
        }
    };

    const renderApiEntry = ({ item }: { item: ApiEntry }) => (
        <View style={styles.apiItem}>
            <Text style={styles.apiTitle}>{item.API}</Text>
            <Text>{item.Description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>{`Waiting Data...`}</Text>
                </View>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item: ApiEntryProps) => item.API}
                    renderItem={renderApiEntry}
                />
            )}
        </View>
    );
};

export default HelloScreen;
