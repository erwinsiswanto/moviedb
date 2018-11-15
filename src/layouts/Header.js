import React from 'react';
import {Header, Icon, Left, Button, Body, Title, Right} from 'native-base';

export default class MyHeader extends React.Component {
    render() {
        const {children, navigate} = this.props;

        return(
            <Header>
                <Left>
                    <Button transparent onPress={() => navigate.openDrawer()}>
                        <Icon name='menu'/>
                    </Button>
                </Left>

                <Body>
                    <Title>{children}</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => navigate.navigate('Search')}>
                        <Icon name='search'/>
                    </Button>
                </Right>
            </Header>
        );
    }
}