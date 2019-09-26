import React from 'react'

export class WalmartButton extends React.Component{
    styles = {
        marginRight: '15px'
    }
    
    render() {
        return (
        <div style={this.styles} className="walmart-buy-now" data-publisherid="1394255" data-item-walmartid="54518466|2,16207314|1" data-color="orange" data-size="standard" data-buynow-added="1"><iframe style={{height: "41px", width: "162px", border: "none"}} src="//affil.walmart.com/buttons/buynow?items=54518466|2,16207314|1&amp;upcs=&amp;size=primary&amp;color=orange&amp;publisher=1394255&amp;site=http://localhost:8000/&amp;sdkversion=1.0.1&amp;buttonId="></iframe></div>        )
    }
}

