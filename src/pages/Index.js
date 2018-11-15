import React from 'react';
import fetchBaseData from "../redux/actions/base";
import logo from '../assets/img/logo.png';
import { Image } from 'react-native';
import {View} from 'native-base';
import Now from '../routes/drawer';
import { connect } from 'react-redux';

class Index extends React.Component {
    componentDidMount() {
        this.props.fetchBaseData();
    }

    render() {
        const {base_data} = this.props;

        if(!base_data.isReady)
        {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                    <Image large square source={logo}/>
                </View>
            );
        }

        return (
            <Now/>
        );
    }
}

const mapStateToProps = state => ({
    base_data: state.base,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBaseData: () => dispatch(fetchBaseData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);