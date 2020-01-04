import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';
import {pageContents, listData} from '../../data/dataStore';


class App extends React.Component {
  state = {
    list: [],

  }

  addList(title){
    this.setState(state => (
      {
        list: [
          ...state.list,
          {
            key: state.list.length ? state.list[state.list.length-1].key+1 : 0,
            title,
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    console.log('this.props.list', this.props);
    console.log('{...listData}', {...listData});
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>

        <List {...listData} />

        <div className={styles.creator}>
          <Creator action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;

