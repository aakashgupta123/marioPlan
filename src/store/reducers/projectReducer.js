const initState={
    projects:[{id:'1'   ,title:"hello",content:"how are you"}
            ,{id:'2',title:"hello",content:"how are you"},
            {id:'3'   ,title:"hello",content:"how are you"}]
}
const projectReducer=(state= initState ,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("created Project",action.project );
            return  state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err) ;
            return  state;
        default:
            return state;    
    }
    
}
export default projectReducer;