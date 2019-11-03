import React from 'react'

export class PageHeader extends React.Component{

    styles = {
        width: '100%',
        minHeight: '120px',
        backgroundColor: '#9b9b9b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: "2rem",
        fontWeight: '300'
    }

    render() {

        return (
            <div style={this.styles} className="page-header">
                {this.props.pageTitle}
            </div>
        )
    }
}