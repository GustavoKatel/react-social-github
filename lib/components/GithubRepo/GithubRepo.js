import React, { Component } from 'react';
import { StarIcon, RepoForkedIcon, OctofaceIcon } from 'react-octicons';
import './GithubRepo.css';

class GithubRepo extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: true,
      repo: {},
      user: {},
      lastRelease: {
        name: '',
        zipUrl: '',
        tarUrl: ''
      }
    };

  }

  componentWillMount() {

    window.fetch('https://api.github.com/repos/' + this.props.user+'/'+this.props.repo)
      .then(response => {
        return response.json()
      }).then(json => {
        this.setState({
          repo: json || {},
          user: json.owner || {},
          isLoading: false
        });
      }).catch(ex => {
        this.setState({
          isLoading: false
        });
        throw ex;
      });

      // retrieve last release
      window.fetch('https://api.github.com/repos/' + this.props.user + '/' + this.props.repo + '/releases')
      .then(response => {
        return response.json()
      }).then(json => {

        if( typeof json === 'object' &&  json.length > 0) {
          this.setState({
            lastRelease: {
              name: json[0].name,
              tarUrl: json[0].tarball_url,
              zipUrl: json[0].zipball_url,
              date: json[0].published_at
            }
          });
        }

      }).catch(ex => {
        throw ex;
      });

  }

  render() {

    let avatar = <img className="avatar" src={this.state.user.avatar_url || ''} alt={this.state.user.login || ''} />;

    if (this.state.isLoading) {
      avatar = <span className="loading-icon"><OctofaceIcon /></span>;
    }

    return (
      <div className="github-wrapper github-repo">
        { avatar }
        <span className="name">{this.state.repo.full_name}</span>
        <p className="info info--italic">{this.state.repo.description}</p>
        <span className="info info--secondary">{this.state.repo.language}</span>

        <div className="counters">
          <div className="item">
            <div className="icon"><StarIcon/></div>
            <div className="description">
              <div className="count">{ Number(this.state.repo.stargazers_count || 0).toLocaleString() }</div>
              <div className="label">Stars</div>
            </div>
          </div>
          <div className="item">
            <div className="icon"><RepoForkedIcon/></div>
            <div className="description">
              <div className="count">{ Number(this.state.repo.forks || 0).toLocaleString() }</div>
              <div className="label">Forks</div>
            </div>
          </div>
        </div>

        <a className="btn btn-github" href={"https://github.com/" + this.state.repo.full_name}>
          <RepoForkedIcon className="icon" />
          <span className="text">Fork @{this.state.repo.name}</span>
        </a>

      </div>
    );
  }
}

export default GithubRepo;
