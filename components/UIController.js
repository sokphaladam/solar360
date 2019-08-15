import React from 'react';
import {
    View,
    StyleSheet,
    VrButton,
    Text
} from 'react-360';


export default class UIController extends React.Component {

    onPositionClick = (x, y) => {
        postMessage({ type: 'newLocation', x, y });
    }

    render(){
        return(
            <View style={styles.container}>
                <VrButton style={styles.button} onClick={(e) => this.onPositionClick(0,-70)}>
                    <Text>Show Top</Text>
                </VrButton>
                <VrButton style={styles.button} onClick={(e) => this.onPositionClick(-50,0)}>
                    <Text>Show Center</Text>
                </VrButton>
                <VrButton style={styles.button} onClick={(e) => this.onPositionClick(0,70)}>
                    <Text>Show Bottom</Text>
                </VrButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 1000,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(250,250,250,0.4)',
    },
    button: {
        padding: '10px',
        backgroundColor: '#363636',
    }
});