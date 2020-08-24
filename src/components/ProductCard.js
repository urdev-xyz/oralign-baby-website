import React from 'react'
import {Link} from 'gatsby'
import {WalmartButton, AmazonButton} from '../components/buttons'

export class ProductCardPreview extends React.Component{
    render() {
        return (
            <Link to="/product" className="product-preview-wrapper">
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

export class ProductCard extends React.Component{
    render() {
        return (
            <div className="product-card">
                <img src={this.props.src}></img>
                <div className="product-card-content">
                    <h1>{this.props.name}</h1>
                    <p className="price">${this.props.price}</p>

                    <div className="button-container">
                        <AmazonButton/>
                        {this.props.shouldShowLearnMore ? <Link to="/product"><button className="white">Learn More</button></Link> : <></>}
                    </div>
                </div>
            </div>
        )
    }
}

