import React from 'react';
import load from '../assets/img/loader.gif'

export default (props) => {
    return (
          <div className="loader hide">
            <img alt="loading" src={load} />
          </div>
    );
  }