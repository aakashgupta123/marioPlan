import React from 'react';
import {NavLink} from 'react-router-dom';
import {signOut} from '../../store/actions/authActions';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
const SignedInLinks=(props)=>{
    //console.log(props.profile.initials)
    //const abcd=props.profile
    //console.log(abcd.A8HtfsZhU2gjKyMhCQnni6PJWIG3.initials)
    //console.log(abcd)
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
        
    )
}


const mapStateToProps=(state)=>{
    //console.log(state.firestore.data.users);
return{
    profile:state.firebase.profile
}
}


const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>{
            dispatch(signOut())
        }
    }
}


export default compose( connect(mapStateToProps,mapDispatchToProps),
        firestoreConnect([
            {
                collection:'users'
            }
        ])
)(SignedInLinks);