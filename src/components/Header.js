import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {

    render() {

        return (
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        borderBottomWidth: 8,
        borderBottomColor: "#bfc0bf",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33adff',
    },
    text: {
        fontSize: 18,
        letterSpacing: 1.1,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 5,
    }
});