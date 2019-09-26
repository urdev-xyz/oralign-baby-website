import React from 'react'
import {Link} from 'gatsby'

export class ProductCardPreview extends React.Component{
    render() {
        return (
            <Link className="product-preview-wrapper">
            <div className="product-card-preview">
                <div className="product-card-preview-inner">
                    <img src={this.props.src}/>
                    <div className="product-card-preview-content">
                        <h1>{this.props.name}</h1>
                        <p>{this.props.description}</p>
                        <Link to={this.props.link}>Learn More</Link>
                    </div>
                </div>                                                                                                                                                                                                            
            </div>
            </Link>
        )
    }
}

