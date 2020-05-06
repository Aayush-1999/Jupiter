import React,{Component} from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Appbar from '../../Components/Navigation/Appbar/Appbar';

class Layout extends Component{
    state={
        // showSideDrawer:false
    }

    render(){
        return(
            <Auxiliary>
                <Appbar />                
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        isAuthenticated:state.auth.token!==null
    }
}

export default connect(mapStateToProps)(Layout);