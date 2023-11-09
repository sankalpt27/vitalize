import React, { Component } from 'react';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      activeTab: 'courses',
    };
  }

  handleLogin = () => {
    this.setState({ loggedIn: true });
  }

  handleTabChange = (tabName) => {
    this.setState({ activeTab: tabName });
  }

  render() {
    const { loggedIn, activeTab } = this.state;

    return (
      <div className="container mt-5">
        <header className="text-center mb-4">
          <h1>Health & Fitness Web App</h1>
        </header>

        {loggedIn ? (
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'courses' ? 'active' : ''}`}
                  onClick={() => this.handleTabChange('courses')}
                >
                  Courses
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`}
                  onClick={() => this.handleTabChange('videos')}
                >
                  Videos
                </button>
              </li>
            </ul>

            <div className="mt-3">
              {activeTab === 'courses' ? (
                <div>
                  <h2>Courses</h2>
                  {/* Add your course content here */}
                </div>
              ) : (
                <div>
                  <h2>Videos</h2>
                  {/* Add your video content here */}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
