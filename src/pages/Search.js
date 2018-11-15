import React from 'react';
import { Container, Content, View, Spinner, List, ListItem, Left, Body, Thumbnail, H3, Row, Col, Text } from 'native-base';
import { TextInput } from 'react-native';
import axios from "axios/index";
import SearchComponent from '../layouts/SearchComponent';
import { connect } from 'react-redux';

class Search extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <SearchComponent navigation={navigation}/>
        )
    });

    render() {
        const { search_results, base_data } = this.props;

        let image_path = base_data.data.secure_base_url + "w92";

        console.log("status: " + search_results.isReady);
        console.log("length: " + search_results.length);

        return(
            <Container>
                <Content style={{flex: 1}}>
                    {
                        search_results.length <= 0
                            ? (<TextInput style={{alignItems:'center'}}>Please type movie keyword</TextInput>)
                            : !search_results.isReady
                                ? ( <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                                        <Spinner color='blue'/>
                                    </View> )
                                : (
                                <List>
                                    {search_results.userData.map((d) => (
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
                                )
                    }
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    search_results: state.search,
    base_data: state.base,
});

export default connect(mapStateToProps)(Search);