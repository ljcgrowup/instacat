import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <Text style={styles.logo}>InstaCat</Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        backgroundColor: '#00Cc00',
        width: '100%',
        height: 40,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 26,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 20,
    }
});

export default Logo;