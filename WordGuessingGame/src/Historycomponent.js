import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Button from 'apsl-react-native-button';

class Historycomponent extends Component {
    constructor() {
        super();
        this.state = {
            currentPositon: -1,
            currentSize:3,
            skip:'Get New Word\n(-4 pts)'
        }
    }
}
export default Historycomponent;