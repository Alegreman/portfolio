import React, { Component } from 'react';
import LINKS from './data/links';

class Link extends Component {
    render(){
        const { image,link } = this.props.link;



        return(
            <span>
             <a href={link}>
                <img src={image} alt='social-profile' style={{width: 45, height:45, margin: 10 }} />
             </a>
            </span>
        )
    }
}

class Links extends Component {
    render(){
        return(
            <div className='media'>
                <h2>Social Media</h2>
                <div>
                    {
                        LINKS.map(LINK => {
                            return (
                                <Link key={LINK.id} link={LINK} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Links;