import React,{ Component } from 'react';
const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        list:[],
        
    }

 
 addList = (inputList)=>{
this.setState((prevState)=>({
    list:[...prevState.list,inputList]
}))
}

deleteList =(idx)=>{
let newArray = this.state.list
newArray.splice(idx,1)
this.setState({list:newArray})
}

    render(){
        return(

            <>
            <MyContext.Provider value={{
                state: this.state,
                addList:this.addList,
                deleteList:this.deleteList,
           }}>
                {this.props.children}
            </MyContext.Provider>
            </>
 
        )
    }
}


export {
    MyContext,
    MyProvider
}