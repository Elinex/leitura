import React, { Component } from 'react'
import './App.css'
import EditPost from './posts/EditPost'
import Post from './posts/Post'
import { getPosts } from './posts/actions'
import AddPost from './posts/AddPost'
import { connect } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import SortPostsBy from './SortPostsBy'
import sortBy from 'sort-by'
import { getCategories } from './categories/actions'
import CategoriesMenu from './categories/CategoriesMenu'
import AddComment from './comments/AddComment'
import Comment from './comments/Comment'
import {CardHeader} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Toolbar } from 'material-ui/Toolbar'
import { getCommentsAPI } from './dataAPI'
import { getCommentsAction } from './comments/actions'
import PageNotFound from './PageNotFound'

const style = {
  backgroundColor: {backgroundColor: 'rgb(232, 232, 232)'},
  display: {display: 'contents'}
}

export class App extends Component {
  state = {
    valueSortPosts: ''
  }

  componentWillMount(){
    this.props.getCategories()
    this.props.getPosts()
  }

  componentDidMount(){
    this.props.posts.map(post =>
      getCommentsAPI(post.id)
        .then(res => this.props.dispatch(getCommentsAction(post.id, res)))
    )
  }

  sortPosts = (option, value) => {
    this.setState({
      valueSortPosts: value
    })
    this.props.posts.sort(sortBy(option))
  }

  render() {

    const { posts, comments } = this.props

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Readable</h1>
          </header>
          <Switch>

            <Route exact path='/'
              render={() => (
                <div>
                  <Toolbar>
                    <CategoriesMenu />
                    <SortPostsBy sortPosts={this.sortPosts}/>
                  </Toolbar>
                  {posts.map(post => {
                    if (post.deleted === false){
                      return <Post key={post.id} post ={post} />
                    } else {
                      return null
                    }
                  })}
                  <FlatButton label="Add post" containerElement={<AddPost />} />
                </div>
              )}
            />

            <Route path='/:category/:id'
              render={({match}) => {

                const post = posts
                  .filter(post => post.id === match.params.id)
                  .reduce((acc, cur) => {
                    return cur
                  }, {})

                return (
                  <div>
                    {(post.deleted === false) && (
                      <div>
                        <CategoriesMenu />
                        <Post post={post}/>
                        {(comments[post.id] !== undefined) && (
                          <div>
                            {comments[post.id].map(comment =>
                              <CardHeader
                                key={comment.id}
                                style={style.backgroundColor}
                                subtitle={<Comment comment={comment} />}
                                textStyle={style.display}
                              />
                            )}
                          </div>
                        )}
                        <AddComment parentId={post.id} />
                      </div>
                    )}
                    {((post.deleted === true) || (post.id === undefined)) && (
                      <PageNotFound />
                    )}
                  </div>
                )
              }}
            />

            <Route path='/editPost/:id'
              render={({match}) => (
                <EditPost
                  postID={match.params.id}
                />
              )}
            />

            <Route path='/:category'
              render={({match}) => (
                <div>
                  <Toolbar>
                    <CategoriesMenu />
                    <SortPostsBy sortPosts={this.sortPosts}/>
                  </Toolbar>
                  {posts
                    .filter(post => (post.category === match.params.category))
                    .map(post => {
                      if (post.deleted === false){
                        return <Post key={post.id} post ={post} />
                      } else {
                        return null
                      }
                    })
                  }
                  <FlatButton label="Add post" containerElement={<AddPost />} />
                </div>
              )}
            />

          <Route path='*' component={PageNotFound}/>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state,
    posts: state.posts.sort(sortBy('-voteScore')),
    comments: state.comments
  }
}

const mapDispatchToProps = { getCategories, getPosts }

export default connect(mapStateToProps, mapDispatchToProps)(App)
