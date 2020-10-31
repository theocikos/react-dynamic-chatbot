import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

export default class ChatBubble extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.container}>
                    <div>{this.props.message}</div>
                    <div>{this.props.details}</div>
                </div>
            </Fragment>
        )
    }

    static propTypes = {
        message: PropTypes.string,
        details: PropTypes.string
    }
}
