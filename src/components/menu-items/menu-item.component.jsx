import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ genre , imageURL ,large}) => (
    <div style={{
        backgroundImage : `url(${imageURL})`
    }} className={`${large} menu-item`}
    >
        <div className="content">
            <h1 className="genre">{genre.toUpperCase()}</h1>
            <span className="subtitle">Explore More</span>
        </div>
    </div>
)

export default MenuItem;