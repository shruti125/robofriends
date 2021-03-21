import React from 'react'

class ErrorBwoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error){
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <h1>Error!</h1>
        } 
        return this.props.children;
    }
}

export default ErrorBwoundary;