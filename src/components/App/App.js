import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';



class App extends React.Component {
  // state = {
  //   list: [],
  // }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
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
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}

        <div className={styles.creator}>
          <Creator action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;

