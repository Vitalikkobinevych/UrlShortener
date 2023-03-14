import React, { Component } from 'react';

class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1>Hello!</h1>
            <p>Welcome to my Url_Shortener application</p>
            <p>To help you get started, we have also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Url</em> then <em>Back</em> to return here.</li>
                <li><strong>Url page</strong>. At this page you can short your url</li>
                <li><strong>Login Page</strong>. At this page you can log in into your account and get more functionality</li>
                <li><strong>About Page</strong>. Here you will get acquainted with the algorithm of exactly how we shorten Url link</li>
            </ul>
        </div>
    );
  }
}
export default Home;