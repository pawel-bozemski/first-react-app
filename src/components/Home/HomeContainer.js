/* eslint-disable linebreak-style */
import {connect} from 'react-redux';
import Home from './Home';
import {createActionAddList} from '../../redux/listRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
    columns: [],
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  })),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);