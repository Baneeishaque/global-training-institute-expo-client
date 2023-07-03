import { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: "center" }} >
            <View style={styles.container}>
                <View style={styles.bannerImgContainer}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.bannerImg}
                        resizeMode="contain"
                        alt="Global training logo"
                    />
                </View>
                <Text style={styles.logoCaption}>Matching Trainers To Classes</Text>
                <View style={styles.loginCaption}>
                    <Text style={styles.loginText}>Login</Text>
                    <Text style={styles.loginsubText}>login to continue using the app</Text>
                </View>
                <View style={styles.loginCard}>
                    <TextInput
                        style={styles.loginInput}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Username"
                    />
                    <TextInput
                        style={[styles.loginInput, styles.mt5]}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <View style={styles.textLinks}>
                        <Text style={styles.subText}>create account</Text>
                        <Text style={styles.subText}>forget password?</Text>
                    </View>
                    <View style={styles.loginCaption2}>
                        <Text style={styles.loginText2}>Login</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        height: '100%',
        backgroundColor: '#fff',
    },
    bannerImgContainer: {
        marginTop: 1,
        alignItems: 'center',
    },
    bannerImg: {
        width: 140,
        height: 140,
    },
    loginCaption: {
        marginTop: 10,
        marginBottom: 30,
    },
    loginText: {
        color: '#2962F6',
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 40,
    },
    loginText2: {
        justifyContent: 'center',
        color: '#FFF',
        padding: 8,
        fontSize: 15,
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: '#2962F6',
        width: '100%',
    },
    msgText: {
        justifyContent: 'center',
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        borderRadius: 20,
        width: '100%',
    },
    subText: {
        fontSize: 12,
        color: '#BCB2B2',
    },
    loginsubText: {
        fontSize: 12,
        color: '#BCB2B2',
        textAlign: 'center',
    },
    loginCard: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
    },
    loginInput: {
        width: '100%',
        backgroundColor: '#D9D9D9',
        color: '#FFFFFF',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
    },
    mt5: {
        marginTop: 5,
    },
    textLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    secGetStarted: {
        marginTop: 20,
        borderRadius: 20,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#0060c0',
        width: '50%',
    },
    logoCaption: {
        textAlign: 'center',
    },
    loginCaption2: {
        marginTop: 20,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
    },
    loginButton: {

    },
    snack: {
        padding: 0,
        textAlign: "center",
        backgroundColor: '#144272',
        borderRadius: 20,
        color: '#FFFFFF !important',
    }
});