import React from 'react'

const withCounter = (Component) => {
    return class Hoc extends React.Component {
        render() {
            return (
                <div>
                    <Component {...this.props} someProps="test" />
                </div>
            )
        }
    }
}