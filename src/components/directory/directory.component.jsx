import React from 'react';

import MenuItem from '../menu-items/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            section: [
                {
                    id: 1,
                    genre: 'History',
                    imageURL: "https://images.unsplash.com/photo-1582034438152-77bc94ffa6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhpc3Rvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    id: 2,
                    genre: 'Romance',
                    imageURL: "https://media.istockphoto.com/photos/silhouettes-of-a-young-couple-under-the-starry-sky-my-astronomy-work-picture-id845305318?b=1&k=20&m=845305318&s=170667a&w=0&h=0ClgIoxSPdTFnMWRoEa_a67KFrrgHGlCBkjEO7i3eR8="
                },
                {
                    id: 3,
                    genre: 'Fiction',
                    imageURL: "https://images.unsplash.com/photo-1530519362533-b36020711133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                    id: 4,
                    genre: 'Biography',
                    imageURL: "https://media.istockphoto.com/photos/text-my-story-typed-on-retro-typewriter-picture-id857775398?b=1&k=20&m=857775398&s=170667a&w=0&h=AdOkgu0SZ13eeKGh4ZnLxN7UPEVDrUMzYYP18XC_-xg=",
                    large : true
                },
                {
                    id: 5,
                    genre: 'Drama',
                    imageURL: "https://images.unsplash.com/photo-1592724217096-618c2d580826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
                    large: true
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({ genre, imageURL, id , large}) => (
                        <MenuItem key={id} genre={genre} imageURL={imageURL} large={large}/>
                    ))
                }</div>
        )
    }
}
export default Directory;

