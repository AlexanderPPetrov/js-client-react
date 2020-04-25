import React from 'react';
import {useSelector} from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';
const UserMenu = () => {
    const currentUser = useSelector(state => state.currentUser);
    return <NavLink
        tag={RRNavLink}
        exact to="/profile">
        <div className="d-flex align-items-center ml-3 text-white">
            <i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>
            <div>{currentUser.firstName} {currentUser.lastName }</div>
        </div>
    </NavLink>
    

}

export default UserMenu;