import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div class='container'>
        <h1 className='title'>ANOTHER WEATHER SITE</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
