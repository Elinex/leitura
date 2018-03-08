import React, { Component } from 'react'
// import {Card, CardHeader, CardText} from 'material-ui/Card'
// import FlatButton from 'material-ui/FlatButton'
// import Avatar from 'material-ui/Avatar'
// import { dateToString } from '../helpers'
// import Comment from './comments/Comment'
import { connect } from 'react-redux'
import UpAndDownVote from '../UpAndDownVote'
import { Link } from 'react-router-dom'
// import { removePostAction } from './actions'
// import * as dataAPI from '../dataAPI'
// import NewComment from './comments/NewComment'
import RemovePost from './RemovePost'

const labelStyle = {
  textTransform: 'capitalize',
  color: 'pink'
}

class Post extends Component{

// ideia do Lucas: editar post ao invés de fazer essa funçao
  // removePost = () => {
  //   if (window.confirm('Are you sure to remove this post?')){
  //     return dataAPI.removePostAPI(this.props.post.id).then(res => {
  //       return this.props.dispatch(removePostAction(res))
  //     })
  //   }
  // }

  render (){

    return (
      <div>Post component</div>
      // <Card style={{fontSize: 14}}>
      //   <CardHeader
      //     title={this.props.post.author.toUpperCase()}
      //     titleColor='pink'
      //     titleStyle={{fontWeight: 'bold'}}
      //     subtitle={
      //       <div>
      //         <div>
      //           {`Posted in ${this.props.post.category} category`}
      //         </div>
      //         <div >
      //           {dateToString(this.props.post.timestamp).slice(0, 15)}
      //         </div>
      //       </div>
      //     }
      //     children={
      //       <div>
      //         <div>
      //           <h3>{this.props.post.title}</h3>
      //         </div>
      //         <div style={{backgroundColor: '#FFE4E1', 'padding': '15px 5px', whiteSpace: 'normal'}}>
      //           <p>
      //             {this.props.post.body}
      //           </p>
      //           <UpAndDownVote voteScore={this.props.post.voteScore} post={this.props.post}/>
      //         </div>
      //       </div>
      //
      //     }
      //     avatar={
      //       <Avatar backgroundColor={'rgb(232, 232, 232)'} color='black'>
      //         <div>
      //           <div style={{fontSize: 8}}>
      //             Score
      //           </div>
      //           <div>
      //             {this.props.post.voteScore}
      //           </div>
      //         </div>
      //       </Avatar>}
      //   />
      //   <div style={{display: 'inline-flex'}}>
      //     <FlatButton label="Edit" labelStyle={labelStyle} containerElement={<Link to={`/editPost/${this.props.post.id}`} />} />
      //     <FlatButton label="Remove" labelStyle={labelStyle} containerElement={<RemovePost postID={this.props.post.id}/>} />
      //     <FlatButton label="New Comment" labelStyle={labelStyle} containerElement={<NewComment parentID={this.props.post.id}/>} />
      //   </div>
      //   <CardHeader
      //     subtitle='Post comments'
      //     actAsExpander={true}
      //     showExpandableButton={true}
      //   />
      //   <CardText expandable={true}>
      //     {(this.props.comments.length > 0) && (
      //       this.props.comments.filter(comment => (comment.parentId === this.props.post.id))
      //       .map(comment => {
      //         return (
      //           <Comment key={comment.id} comment={comment} />
      //         )
      //       })
      //     )}
      //     {(this.props.comments.filter(comment => (comment.parentId === this.props.post.id)).length === 0) && (
      //       <div>
      //         <div>No comments.</div>
      //         <div>Make one!</div>
      //       </div>
      //     )}
      //   </CardText>
      // </Card>
    )
  }
}

export default Post