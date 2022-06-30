import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( 
    <View style = { styles.container } >
        <Text> Duolingo Clone App</Text>  
        <Text>Hey Do u liked the App</Text> 
        <StatusBar style = "auto" />
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});