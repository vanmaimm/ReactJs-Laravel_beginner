import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
class Post extends Component{
    constructor(props) {
        super(props);
        this.state ={
            post:[]
        }
        let id=this.props.match.params.postId;
        this.getData(id);
      }
      getData(id){
          fetch("http://127.0.0.1:8000/api/posts/"+id)
          .then(response=>{
              response.json().then((data)=>{
                  console.log(data);
                  this.updateIU(data);
              })
          })
      }
      updateIU(data){
          this.setState({
              post:data
          })
      }
    render(){
        return(
            <div>
            <h2>{this.state.post.title}</h2>
            <p>{this.state.post.content}</p>
            </div>
        )
    }
}
  export default withRouter(Post) ;