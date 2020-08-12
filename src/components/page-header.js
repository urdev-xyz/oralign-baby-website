import React from 'react'

export class PageHeader extends React.Component{

    styles = {
        width: '100%',
        minHeight: '120px',
        marginBottom: 15,
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
