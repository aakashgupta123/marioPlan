import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
const ProjectDetails=(props)=>{
    //console.log(props)
    const {project,auth}=   props;
    if (!auth.uid) return <Redirect to="/signin"/>
    if (project){
    return(
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{project.id}</span>
                <p>{project.content}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">Posted by {project.authotfirstName} {project.authorlastName}</div>
            <div>{project.createdAt.toDate().toString()}</div>
        </div>

        </div>
    )
}
else{
    return(
        <div className="container center"> Loading data...</div>
    )
}

}

const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects
    const project=projects?projects[id]:null
    return{
        project:project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)
(ProjectDetails);