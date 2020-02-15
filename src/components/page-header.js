import React from 'react'

export class PageHeader extends React.Component{

    styles = {
        width: '100%',
        minHeight: '120px',
        marginBottom: 15,
        backgroundColor: '#9b9b9b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: "2rem",
        fontWeight: '300'
    }
    test = {
        width: 'auto',
        textAlign: 'center'
    }

    render() {

        return (
            <div style={this.styles} className="page-header">
                <p style={this.test}>{this.props.pageTitle}</p>
            </div>
        )
    }
}