import React , {useState} from 'react';
import {Text, StyleSheet, Pressable, View, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Collections = ({navigation}) => {

    const [collection, setCollection] = useState(['Camera', 'WhatsAppImages', 'Instagram', 'Facebook', 'Downloads', 'Telegram', 'Backgrounds', 'Wallpapers']);

    // Array.from({length: 10}).fill(undefined)


    return(
        <View style = {styles.collectionComponent}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    Gallery
                    <Icon name = {'images'} size = {35} color = {'white'}/>
                </Text>
            </View>

            <View style = {styles.body}>
                <ScrollView style = {styles.scroll} contentContainerStyle = {styles.contentContainerStyle}>
                    {collection.map((itemName, index) => (
                        <Pressable 
                        style = {styles.collection} 
                        android_ripple = {{color: 'lightgray', borderless: true}}
                        onPress = {() => {navigation.navigate('CollectionImages', {collectionIndex: index})}}>
                            <Image source = {{uri: `https://picsum.photos/seed/${index + 1}/200`}} style = {styles.image}/>
                            <Text style = {styles.collectionName}>{itemName}</Text>
                        </Pressable>
                    ))
                    }
                    {/* <Pressable style = {styles.collection} android_ripple = {{color: 'lightgray', borderless: true}}></Pressable> */}
                </ScrollView>
            </View>
        </View>
    )
}

export default Collections;

const styles = StyleSheet.create({
    collectionComponent: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
    },

    header: {
        flex: 1,
        backgroundColor: 'black',
    },

    headerText: {
        flex: 1,
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    body: {
        flex: 9,
    },

    scroll: {
        // backgroundColor: 'red',
        flex: 1,
    },

    contentContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flexWrap: 'wrap'
    },

    collection: {
        // borderColor: 'red',
        // borderWidth: 1,
        height: 200,
        width: '48%',
        borderRadius: 20,
        marginBottom: 10,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    collectionName: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#09090963',
        fontSize: 18,
    }
});