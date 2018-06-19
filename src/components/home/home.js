import Drawer from 'react-native-drawer'
import Header from '../header/index'
import React, { Component } from 'react'
import { View, StyleSheet, } from 'react-native'
import SideMenu from './SideMenu'

export default class Home extends Component {
    state = {
        drawerOpen: false
    }
    toggleDrawer(){
        (this.setState({drawerOpen:!this.state.drawerOpen}))
    }
    render() {
        return (
            <View>
                <Drawer
                    open={this.state.drawerOpen}
                    type="static"
                    tapToClose={true}
                    openDrawerOffSet={0.5}
                    closedDrawerOffSet={0}
                    content={<SideMenu/>}
                    onClose={this.closeDrawer}
                >
                    <View>
                        <Header title="Home" toggleDrawer={this.toggleDrawer} />
                    </View>
                </Drawer>
            </View>
        );
    }
}