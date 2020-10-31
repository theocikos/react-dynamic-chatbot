import React, { Component, Fragment } from 'react'
import styles from '../styles.module.css';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5>{this.props.title}</h5>
                    <h5>X</h5>
                </div>
            </Fragment>
        )
    }
}
