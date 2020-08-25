// Higher Order Component (HOC) - A component (hoc) that renders another component
// Advantages of HOCs:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info.  Please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

// Require Authentication

const requireAuthenication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                    <WrappedComponent {...props} />
                </div>
            )
                :
                <p>Please authenicate</p>}
        </div>
    )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthenication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById("app"))