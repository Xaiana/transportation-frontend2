import React, { Component } from 'react';
import Button from '@hackoregon/component-library/lib/LeafletMap/LeafletMap';
import { GeoJSON } from 'react-leaflet';
import { connect } from 'react-redux';
import { getFmasThunk, getFmasData, renderFmaPanelId, getFmaPanelId } from '../../state';
import { MapPanel } from '../index';
import Select from 'react-select';

const portland = [45.52, -122.67];

class ControlBox extends React.Component {
  constructor() {
    this.state = {
      options: [
        {value: 'Nearby Projects', text: 'Nearby Projects'},
        {value: 'Project Conflicts', text: 'Project Conflicts'},
        {value: 'Projects by Source', text: 'Projects by Source'}
      ]
    }
  }


  render() {
    return (
      <div class='dropdown'>
        <button class='dropdown' type='dropdown' data-toggle='dropdown'>Search</button>
        <ul class='drowpdown-menu'>
          <li>Conflicts</li>
          <li>Projects</li>
          <li>Source</li>
        </ul>
      </div>
    );
  }
}

export default ControlBox;
