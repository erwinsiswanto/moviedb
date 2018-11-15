import React from 'react';
import {Image} from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Left, Header, Title, Right, Button, Icon, View, Spinner } from 'native-base';
import { connect } from 'react-redux';
import axios from "axios/index";

class Detail extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <Header>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>

                <Body style={{ flex: 4 }}>
                <Title>{ navigation.getParam('title', 'Details') }</Title>
                </Body>

                <Right/>
            </Header>
        )
    });

    constructor () {
        super();
        this.state = {
            detail: [],
            isReady: false
        };
    }

    componentDidMount() {
        const movie_id = this.props.navigation.getParam('id', '0');

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=108413e1a2cd7457bbf0b9df9953b7eb&language=en-US`)
            .then(response => {
                this.setState({
                    detail: response.data,
                    isReady: true
                });
            });
    }

    render() {
        const {detail, isReady} = this.state;
        const images = this.props.base_data.data;

        return (
            <Container style={{ display: "flex" }}>
                {
                    !isReady ? (
                        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                            <Spinner color='blue'/>
                        </View>
                    ) : (
                        <Content style={{display: 'flex'}}>
                            <Card>
                                <CardItem cardBody>
                                    <Image source={{uri: images.secure_base_url + 'w780' + detail.backdrop_path}} style={{height: 300, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button transparent>
                                            <Text>Vote Count: {detail.vote_count} </Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                    <Button transparent>
                                        <Text>Popularity: {detail.popularity}</Text>
                                    </Button>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                            <Text>Released: { detail.release_date }</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Body>
                                        <Text>{ detail.tagline }</Text>
                                        <Text note>{ detail.status }</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>

                            <View style={{ padding:5 }}>
                                <Text>Overview: </Text>
                                <Text>{ detail.overview }</Text>
                            </View>
                        </Content>
                    )
                }
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    base_data : state.base
});

export default connect(mapStateToProps)(Detail);