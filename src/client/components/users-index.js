import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'  // not necessary due to refactor
import { fetchUsers } from '../actions/index'
import { Link } from 'react-router';

class UsersIndex extends Component {
  componentWillMount() {
    // this.props.fetchUsers()
  }

  // renderUsers() {
  //   return this.props.posts.map((post) => {
  //     return (
  //       <li className="list-group-item" ket={post.id}>
  //         <Link to={"posts/" + post.id}>
  //           <span className="pull-xs-right">{post.categories}</span>
  //           <strong>{post.title}</strong>
  //         </Link>
  //       </li>
  //     )
  //   })
  // }

  render() {
    return (
      <div>
      Hello from users index
      {this.props.users}
        // <div className="text-xs-right">
        //   <Link to="/posts/new" className="btn btn-primary">
        //     Create Post
        //   </Link>
        // </div>
        // <h3>Posts</h3>
        // <ul className="list-group">
        //   {this.renderPosts()}
        // </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state };
  // return null
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
//  ^^^ this code is refactored into the below line

export default connect(mapStateToProps, { fetchUsers })(UsersIndex);  // this gives us access to this.props
