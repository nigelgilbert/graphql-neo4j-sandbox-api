import PropTypes from 'prop-types'
import Consumer from 'fusion:consumer'
import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://boiling-hollows-82728.herokuapp.com/graphql'
});

@Consumer
class SessionList extends Component {
  constructor (props) {
    super(props)
    this.state = { sessions: [] };
    this.fetchWithApollo();
  }

  fetchWithApollo() {
      client.query({
        query: gql`
          query getAllSessions {
            Session {
              about
              name
              _id
            }
          }
        `,
      })
      .then(response => this.setState({ sessions: response.data.Session }))
      .catch(error => console.error(error));
  }

  fetchWithArc () {
    const { fetched } = this.getContent('get-sessions', {});
    fetched.then(response => this.setState({ sessions: response.data.Session }));
  }

  render () {
    const { sessions } = this.state;
    const smiley = `:)`;
    return <div>
      {sessions && sessions.map((session, idx) =>
        <div className='col-sm-12 border' key={`movie-${idx}`}>
          <h4>{session.name}</h4>
        </div>
      )}

    </div>;
  }
}

export default SessionList
