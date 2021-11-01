import React from 'react';

import MenuItem from '../menu-items/menu-item.component';
import axios from 'axios';
import './directory.styles.scss';

import base_url from "../../base-content";

class Directory extends React.Component {
    
    constructor() {
        super();
        this.state = {
            section: [],
            imagePath : '/assets/homepage/'
        }
    }

    componentDidMount() {
        axios.get(`${base_url}`)
            .then(
                (response) => {
                const section = response.data;
                console.log(response);
                this.setState({ section });
            },
            (error) =>{
                console.log("Internal Server Error");
                console.log(error);
            }
            )
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    //let imagesPath = "../../assets/homepage/";
                    this.state.section.map(({ genre, path, id, fit }) => (
                        <MenuItem key={id} genre={genre} imageURL={`${this.state.imagePath}${path}.jpg`} large={fit} />
                    ))
                }</div>
        )
    }
}
export default Directory;

