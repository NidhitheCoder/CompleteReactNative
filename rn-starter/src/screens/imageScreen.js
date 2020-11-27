import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetails from '../components/imageDetails';

const ImageScreen =() => {
    return <View >
    <Text style={styles.headingText}>Image Screen</Text>
    <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score={8} />
    <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score={7}/>
    <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={8}/>
    </View>
};

const styles =StyleSheet.create({
    headingText:{
        fontSize:20,
        marginVertical:5
    }
});

export default ImageScreen;