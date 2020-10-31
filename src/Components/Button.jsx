import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Button extends Component {
    render() {
        return (
            <Fragment>
               <button>
                   {this.props.title}
               </button>
            </Fragment>
        )
    }
static propTypes = {
    title: PropTypes.string
}
}

export default Button;
