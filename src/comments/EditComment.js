import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import * as dataAPI from '../dataAPI'
import { editCommentAction } from './actions'
import { connect } from 'react-redux'

const style = {
  fontSize: '12px',
  color: 'rgba(0, 0, 0, 0.54)'
}

const errorText = 'This field is required'

class EditComment extends Component {
  state = {
    open: false,
    body: this.props.comment.body
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  checkFields = () => {
    if (this.state.body === ''){
      alert('Fill all the fields')
    } else {
      this.editComment()
      alert('Comment edited with success')
    }
  }

  editComment = () => {
    dataAPI.editCommentAPI(this.props.comment.id,
      {body: this.state.body, timestamp: Date.now()}).then(res => {
      this.props.dispatch(editCommentAction(res))
    })
    this.setState({open: false})
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Edit"
        primary={true}
        keyboardFocused={true}
        onClick={this.checkFields}
      />
    ]

    return (
      <div>
        <FlatButton  labelStyle={style} label="Edit" onClick={this.handleOpen} />
        <Dialog
          title="Edit the comment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            id='body'
            floatingLabelText="Text"
            defaultValue={this.props.comment.body}
            type="text"
            errorText={errorText}
            onChange={(event) => this.setState({body: event.target.value})}
          /><br />
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(EditComment)
