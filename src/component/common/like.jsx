import React, { Component } from 'react';

const Like = (props) => {
    let classes = "fa fa-heart";
        if(!props.liked) classes+='-o';
        return (
            <i onClick={props.onClick} style={{cursor: "pointer"}} className={classes}></i>
            // <i onClick={()=> this.defineLike()} className={this.state.likeIcon}></i>
        );
}
 

// class Like extends Component {
//     // state = { 
//     //     like: false,
//     //     likeIcon: "fa fa-heart-o"
//     //  } 
//     // defineLike(){
//     //     let likeIcon = '';
//     //     let like = '';

//     //     if(this.state.like)
//     //     {
//     //         likeIcon="fa fa-heart-o";
//     //         like = false;
//     //     }
//     //     else{
//     //         likeIcon="fa fa-heart";
//     //         like = true;
//     //     }
//     //     this.setState({likeIcon});
//     //     this.setState({like});        
//     // }
//     render() { 
//         let classes = "fa fa-heart";
//         if(!this.props.liked) classes+='-o';
//         return (
//             <i onClick={this.props.onClick} style={{cursor: "pointer"}} className={classes}></i>
//             // <i onClick={()=> this.defineLike()} className={this.state.likeIcon}></i>
//         );
//     }
// }
 
export default Like;