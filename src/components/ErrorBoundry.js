import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })

    }

    render() {
        const { hasError } = this.state;
        if(hasError) {
            return(
                <div>
                    <h1>
                        Ooooooops. This is not good
                    </h1>
                </div>
            )
        } else{
            return(
                this.props.children
            )
        }
    }
}
export default ErrorBoundry;