import React, { useState } from 'react';
import Storage from '../Storage/Storage';
import { Redirect } from 'react-router-dom';

const withAuthor = (AuthorticatedComponent) => {
    class HOC extends React.Component {
        render() {
            return (
                !Storage.isAuthor()
                    ?
                    <Redirect
                        to={{
                            pathname: "/auth/403"
                        }}
                    />
                    :
                    <AuthorticatedComponent {...this.props} />
            );
        }
    }
    return HOC;
}
export default withAuthor;
