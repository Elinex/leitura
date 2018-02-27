import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'
import sortBy from 'sort-by'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

export class MainView extends Component {
  state = {
    valueSortPosts: 'Sort posts by',
    valueCategory: 'none'
  }

  sortPosts = (option, value) => {
    this.setState({
      valueSortPosts: value
    })
    this.props.posts.sort(sortBy(option))
  }

  changeCategory = (value) => {
    this.setState({
      valueCategory: value
    })
  }

  render() {

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <DropDownMenu value={this.state.valueSortPosts} style={{fontWeight: 'bold' }}>
              <MenuItem value={'Sort posts by'} primaryText='Sort posts by' disabled={true}/>
              <MenuItem value={'Recently posted'} primaryText='Recently posted' onClick={() => this.sortPosts('-timestamp', 'Recently posted')}/>
              <MenuItem value={'Most commented'} primaryText='Most commented' onClick={() => this.sortPosts('-commentCount', 'Most commented')}/>
              <MenuItem value={'Highest score'} primaryText='Highest score' onClick={() => this.sortPosts('-voteScore', 'Highest score')}/>
            </DropDownMenu>
          </ToolbarGroup>

          <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.valueCategory} style={{fontWeight: 'bold' }}>
              <MenuItem value={'none'} primaryText='Posts by category' />
              {this.props.categories.map(category => {
                return (
                  <MenuItem key={category.name} children={
                    <Link to={`/${category.name}/posts`}>{category.name}</Link>
                  } />
                )
              })}
            </DropDownMenu>
          </ToolbarGroup>
        </Toolbar>

        {this.props.posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}
        <Link to='/addPost' className='btn btn-secondary btn-sm'>NEW POST</Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(MainView)