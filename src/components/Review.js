import React from 'react'
import {Link} from 'gatsby'


export const Star = (props) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="58" height="55" viewBox="0 0 58 55" fill={props.fill ? `#FF7A00` : `#748D9A`}>
                <path d="M28.0489 0.927046C28.3483 0.00573557 29.6517 0.00573985 29.9511 0.92705L35.9599 19.4205C36.0938 19.8325 36.4778 20.1115 36.911 20.1115H56.3561C57.3249 20.1115 57.7276 21.3511 56.9439 21.9205L41.2125 33.35C40.862 33.6047 40.7153 34.056 40.8492 34.4681L46.8581 52.9615C47.1574 53.8828 46.1029 54.6489 45.3192 54.0795L29.5878 42.65C29.2373 42.3953 28.7627 42.3953 28.4122 42.65L12.6808 54.0795C11.8971 54.6489 10.8426 53.8828 11.1419 52.9615L17.1508 34.4681C17.2847 34.056 17.138 33.6047 16.7875 33.35L1.05609 21.9205C0.272374 21.3511 0.675151 20.1115 1.64387 20.1115H21.089C21.5222 20.1115 21.9062 19.8325 22.0401 19.4205L28.0489 0.927046Z" fill=""/>
            </svg> )
}

export class ReviewCard extends React.Component{

    render() {
        const leftOver = 5 - this.props.data.stars
        console.log(leftOver)
        return (
            <div className="review-card">
                <div className="profile-pic" style={{backgroundImage: `url(${this.props.data.image.file.url})`}}></div>
                <h1>{this.props.data.name}</h1>
                <div className="star-container">
                {Array(this.props.data.stars).fill(<Star fill={true}/>)} 
                {leftOver > 0 ? Array(leftOver).fill(<Star fill={false}/>) : ""}
                </div>
                <div className="quote">{this.props.data.review}</div>
            </div>
        )
    }
}
