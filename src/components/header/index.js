

import React,{Component} from 'react'
import Drawer from 'react-native-drawer'
import {StyleSheet,View,Text,Image,Icon,TouchableOpacity} from 'react-native'


export default class Header extends Component{
    
    constructor(props){
        super(props)
    }

    onHamburgerClick(){
        this.props.toggleDrawer();
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.onHamburgerClick}>
                        {/* <Image 
                            source={require('')}
                            style={{}}
                           
                        /> */}
                        {/* <Icon name="menu" size={30} color="#900" /> */}
                    </TouchableOpacity>
                </View>
                <Text>
                    {this.props.title}
                    Teste
                </Text>
                <View>
                    {/* <Icon name='cart' /> */}
                </View>
            </View>


        );
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        width:200,
        height:300
    }
})