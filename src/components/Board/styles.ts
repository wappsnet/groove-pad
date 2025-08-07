import theme from 'assets/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    boardContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boardItem: {
        padding: 5,
        width: 70,
        height: 70
    },
    padContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        ...theme.shadows.low
    }
});
