import React, { Component } from "react";
class RepoTable extends Component {
  // Fetch JSON data
  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=stars:>25000+language:javascript&sort=stars&order=desc"
    )
      .then(res => res.json())
      .then(res => this.setState({ items: res.items, isLoaded: true }))
      .catch(error => this.setState({ error }));
  }

  // Set initial state
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  render() {
    const { error, isLoaded, items } = this.state;

    // If error return the error
    if (error) return <p>{error}</p>;

    // Else return the data in a table
    return (
      <div>
        {isLoaded ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Number of stars</th>
                <th>Link to repository</th>
              </tr>
              {items.map(repo => (
                <tr key={repo.id}>
                  <td>{repo.name}</td>
                  <td>{repo.stargazers_count}</td>
                  <td>{repo.git_url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default RepoTable;
