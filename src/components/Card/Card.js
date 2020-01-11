/* eslint-disable linebreak-style */
import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      deleteCard: PropTypes.func,
    }

    render() {
      const {title} = this.props;
      return (
        <div className={styles.component}>
          <h3 className={styles.title} > {title}</h3>
          <span className={styles.title} >X</span>
        </div>
      );
    }
}
export default Card;