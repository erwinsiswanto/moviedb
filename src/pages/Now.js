import React from 'react';
import {Container, Content, Text, Left, List, ListItem, Spinner, Thumbnail, Body, Col, H3, Row, View} from 'native-base';
import Header from '../layouts/Header';
import axios from 'axios/index';
import {connect} from "react-redux";

class Now extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [],
            data: [],
            isReady: false
        }
    }

    componentDidMount() {
        const images = this.props.base_data.data;

        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=108413e1a2cd7457bbf0b9df9953b7eb&language=en-US&page=1')
            .then(response => {
                this.setState({
                    images: images,
                    data: response.data.results,
                    isReady: true
                });
            });
    }

    render() {
        let content;
        const {images, data} = this.state;
        
        console.log(this.props);

        if(!this.state.isReady)
        {
            content = (
                <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                    <Spinner color='blue'/>
                </View>
            );
        }
        else
        {
            let image_path = images.secure_base_url + "w92";

            content = (
                <Content>
                    <List>
                        {data.map((d) => (
                            <ListItem button key={d.id} onPress={() => this.props.navigation.navigate('Detail', {
                                id: d.id,
                                title: d.title,
                                image_path: image_path + d.poster_path
                            })}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail large square source={{uri: image_path + d.poster_path}} style={{height:150, width:100}}/>
                                </Left>

                                <Body style={{ flex: 2 }}>
                                <H3 style={{ flex: 10, flexDirection: 'row' }}>{d.title}</H3>
                                <Row style={{ flex: 9, flexDirection: 'row' }}>
                                    <Col><Text note>Release Date</Text></Col>
                                    <Col><Text note>: {d.release_date}</Text></Col>
                                </Row>
                                <Row style={{ flex: 9, flexDirection: 'row' }}>
                                    <Col><Text note>TMDb</Text></Col>
                                    <Col><Text note>: {d.vote_average}</Text></Col>
                                </Row>
                                <Row style={{ flex: 9, flexDirection: 'row' }}>
                                    <Col><Text note>Popularity</Text></Col>
                                    <Col><Text note>: {d.popularity}</Text></Col>
                                </Row>
                                </Body>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            );
        }

        return(
            <Container style={{ flex:1 }}>
                {content}
            </Container>
        );
    }
}

Now.navigationOptions = ({navigation}) => ({
    header: (
        <Header navigate={navigation}>Now Showing</Header>
    )
});

const mapStateToProps = state => ({
    base_data: state.base,
});

export default connect(mapStateToProps, null)(Now);