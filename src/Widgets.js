import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <ArrowDropDownCircleIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>My project's News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Virgis project", "First Update!!")}
      {newsArticle("Virgis project", "Second Update!!")}
      {newsArticle("Virgis project", "Third Update!!")}
    </div>
  )
}

export default Widgets
