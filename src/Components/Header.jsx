import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.header}>
                    <h5>{this.props.title}</h5>
                    <h5>X</h5>
                </div>
            </Fragment>
        )
    }
static propTypes = {
    title: PropTypes.string
}
}

export default Header;
