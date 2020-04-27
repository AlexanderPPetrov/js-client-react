import React, { useState, useEffect } from 'react';
import {useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
const ProtectedPage = () => {


    const userLoaded = useSelector(state => state.userLoaded);
    const currentUser = useSelector(state => state.currentUser);
    return <>
        {userLoaded && !currentUser._id ? (
              <Redirect to={{pathname: "/"}} />
            ) : (
            <div className="row">
            Some user data
        </div>
        )}
    </>
}

export default ProtectedPage;