/* eslint-disable linebreak-style */
import React from 'react';
import styles from './List.scss';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.Component}>
        <h2 className={styles.subtitle}>
          <Hero titleText={title} backgroundImage={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
        </h2>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}

export default List;

