import { connect } from 'react-redux';
import ProjectSearch from './project_search';

const mapStatetoProps = (state, ownProps) => {
  return {
    projects: state.entities.project
  }
}

export default connect(mapStatetoProps, null)(ProjectSearch);
