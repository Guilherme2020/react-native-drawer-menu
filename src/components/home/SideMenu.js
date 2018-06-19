import React,{Component} from 'react'
import {StyleSheet,View,TouchableOpacity,Image,Text} from 'react-native'

import Drawer from 'react-native-drawer'

export default class SideMenu extends Component{

    render(){
        return(
            <View > 
                <TouchableOpacity>
                    <View>
                        <Image 
                        
                        />
                        <Text>
                            Home
                        </Text>
                    </View>    
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Image 
                        
                        />
                        <Text>
                            Cart
                        </Text>
                    </View>    
                </TouchableOpacity>
            </View>
        )
    }



}