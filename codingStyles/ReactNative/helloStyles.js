import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 20,
        color: '#000000'
    },
    apiItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    },
    apiTitle: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;
