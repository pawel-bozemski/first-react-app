/* eslint-disable linebreak-style */
import React from 'react';
import styles from './List.scss';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className={styles.Component}>
        <h2 className={styles.subtitle}>
          <Hero
            titleText={this.props.title}
            backgroundImage={this.props.image}
          />
          <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
          </div>
        </h2>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  }
}

export default List;

