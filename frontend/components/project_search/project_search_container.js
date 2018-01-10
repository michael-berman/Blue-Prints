import { connect } from 'react-redux';
import ProjectSearch from './project_search';
import { searchProject } from '../../actions/project_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    projects: state.entities.projects
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    searchProject: query => dispatch(searchProject(query))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectSearch);
