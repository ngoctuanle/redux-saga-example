import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import * as LinkActions from './actions/Links';
import {Row, Col, ButtonGroup, Button} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0
        }
    }


    componentDidMount(){
        this.props.dispatch(LinkActions.getLinksRequest({}));
    }

    tabClick(e, index) {
        if(this.state.currentTabIndex !== index){
            this.setState({
                currentTabIndex: index
            })
        }
    }

    getTabs(){
        return ["Tab 1", "Tab 2"]
    }

    saveLink(id) {
        this.props.dispatch(LinkActions.saveLink({id: id}));
    }

    removeLink(id) {
        this.props.dispatch(LinkActions.removeLink({id: id}));
    }

    render() {
        const {links} = this.props;
        return (
            <Row>
                <Col sm={12}>
                    <ButtonGroup>
                        {this.getTabs().map((tab, index) => (
                            <Button key={tab} onClick={e => this.tabClick(e, index)}>{tab}</Button>
                        ))}
                    </ButtonGroup>
                </Col>
                <Col sm={12}>
                    <ul>
                        {
                            this.state.currentTabIndex === 0
                                ? links.map(link => {
                                    return <li key={link.id}>{link.id} <Button disabled={link.saved} onClick={e => this.saveLink(link.id)}>Save</Button></li>

                                })
                                : links.map(link => {
                                    return link.saved
                                        ? <li key={link.id}>{link.id} <Button onClick={e => this.removeLink(link.id)}>Remove</Button></li>
                                        : null
                                })
                        }
                    </ul>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.LinksReducer.links,
        data_loading: state.LinksReducer.waiting
    }
};

export default connect(mapStateToProps)(App);
