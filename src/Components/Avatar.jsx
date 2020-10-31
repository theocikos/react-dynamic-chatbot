import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <img
                    src={this.props.path}
                    width="100%"
                    height="100%"
                    alt={this.props.alt}
                />
            </div>
        );
    }

    static propTypes = {
        onClick: PropTypes.func,
        path: PropTypes.string,
        alt: PropTypes.string,
    };
}
