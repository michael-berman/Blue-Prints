import { connect } from 'react-redux';
import ProjectSearch from './project_search';

const mapStatetoProps = (state, ownProps) => {
  debugger
  return {
    projects: state.entities.projects
  }
}

export default connect(mapStatetoProps, null)(ProjectSearch);
