import { StyleSheet } from 'react-native';
import { FONTS } from '../utils/enums';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    containerView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontFamily: FONTS.TEXT,
        fontSize: 50,
        fontWeight: '900',
        textAlign: 'center',
        color: 'black',
    },
});
