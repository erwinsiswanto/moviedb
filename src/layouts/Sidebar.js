import React from 'react';
import { AppRegistry, View, StatusBar, Image, ImageBackground } from 'react-native';
import { Container, Content, Text, ListItem, List, Thumbnail } from 'native-base';
import bg from '../assets/img/drawerbg.jpg';
import logo from '../assets/img/logo.png';

const routes = [
    {
        key: 'Now',
        description: 'Now Showing'
    },
    {
        key: 'Popular',
        description: 'Popular Movies'
    },
    {
        key: 'Top',
        description: 'Top Rated Movies'
    },
    {
        key: 'Upcoming',
        description: 'Upcoming Movies'
    }
];

export default class Sidebar extends React.Component {
    render() {
        return(
            <Container>
                <Content>
                    <ImageBackground source={bg} style={{
                        height: 180,
                        alignSelf: 'stretch',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Thumbnail large square source={logo} style={{height:100, width:180}}/>
                    </ImageBackground>

                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button onPress={() => this.props.navigation.navigate(data.key)}
                                >
                                    <Text>{data.description}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        )
    }
}
/*


                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button onPress={() => this.props.navigation.navigate(data)}
                                >
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
 */