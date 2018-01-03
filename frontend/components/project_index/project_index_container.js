import { connect } from 'react-redux';
import ProjectIndex from './project_index';

const mapStatetoProps = (state) => {
  debugger
  return {
    projects: Object.values(state.entities.projects)
  };
};

export default connect(mapStatetoProps, null)(ProjectIndex);
