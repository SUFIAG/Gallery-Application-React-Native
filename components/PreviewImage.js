import React from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PreviewImage = (props) => {
    return(
        <View style = {styles.previewImage}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    Preview
                    <Icon name = {'image'} size = {35} color = {'white'}/>
                </Text>
                <Pressable 
                style = {styles.backButton}
                android_ripple = {{color: 'gray', borderless: true}}
                onPress = {() => {props.navigation.navigate('CollectionImages')}}
                >
                    <Icon name = {'caret-left'} size = {50} color = {'white'}/>
                </Pressable>
            </View>

            <View style = {styles.body}>
                <Image source = {{uri: props.route && props.route.params && props.route.params.previewURL}} style = {styles.image}></Image>
            </View>
        </View>
    );
}

export default PreviewImage;

const styles = StyleSheet.create({
    previewImage: {
        flex: 1,
    },

    header: {
        flex: 1,
        backgroundColor: 'black',
    },

    body: {
        flex: 9,
    },

    headerText: {
        flex: 1,
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    backButton: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '20%',
        padding: 15,
        justifyContent: 'center',
    },

    image: {
        height: '100%',
        width: '100%',
    },
    
});