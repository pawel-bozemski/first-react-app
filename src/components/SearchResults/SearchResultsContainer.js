/* eslint-disable linebreak-style */
import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {filterCardForSearch} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: filterCardForSearch(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);