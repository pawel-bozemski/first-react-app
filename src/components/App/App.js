import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class App extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }


  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}

        <div className={styles.creator}>
          <Creator action={addList}/>
        </div>
      </main>
    );
  }
}

export default App;

