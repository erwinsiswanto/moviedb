import React from 'react';
import { Header, Left, Button, Body, Right, Icon } from 'native-base';
import { TextInput } from 'react-native';
import { fetchSearchData, changeLength } from '../redux/actions/search';
import { connect } from 'react-redux';

class SearchComponent extends React.Component {
    componentWillMount() {
        this.timer = null;
    }

    componentDidMount() {
        this.props.fetchSearchData('');
        this.props.changeLength('');
    }

    _getValue = (event) => {
        const text = event;
        this.props.changeLength(text);

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
                this.props.fetchSearchData(text);
            }, 1000);
    };

    render() {
        const {navigation} = this.props;
        return(
            <Header>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>

                <Body style={{ flex: 4 }}>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="lightgray"
                    style={{ color:"white", fontSize:20 }}
                    onChangeText={this._getValue}
                    autoFocus/>
                </Body>

                <Right/>
            </Header>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchSearchData: (query) => dispatch(fetchSearchData(query)),
    changeLength: (query) => dispatch(changeLength(query))
});

export default connect(null, mapDispatchToProps)(SearchComponent);