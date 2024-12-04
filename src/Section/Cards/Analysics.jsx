import React from 'react'

function Analysics() {
  return (
    <div className='analysics box'>
      <div className="analysics-container">
        <div className="pi-chart">
            <div className="chart"></div>
        </div>
        <h2>Post Analysics</h2>
        <div className="left-data data">
            <p>Comments</p>
            <p>Likes</p>
            <p>Shares</p>
        </div>
        <div className="right-data data">
            <p>Follows</p>
            <p>Visitors</p>
            <p>Views</p>
        </div>
      </div>
    </div>
  )
}

export default Analysics
