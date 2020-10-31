import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import styles from './ChatBubble.module.css';

export default class ChatBubble extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.container}>
                    <div className={styles.message}>{this.props.message}</div>
                    <div className={styles.details}>{this.props.details}</div>
                </div>
            </Fragment>
        )
    }

    static propTypes = {
        message: PropTypes.string,
        details: PropTypes.string
    }
}
