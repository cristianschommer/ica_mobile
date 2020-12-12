import React, {useState,useEffect} from 'react';
import { 
    View,
    Text,
    Modal,
    ActivityIndicator
} from 'react-native';
import {StiloProgress} from '../Progress/Css';

const Progress = ()  => {
    return (
        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={true}
                onRequestClose={() => {
                    //SetShowProgress(false);
                }}
            >
                <View style={StiloProgress.container}>
                    <View>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default Progress;

