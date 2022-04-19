import React, { Component } from 'react'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from '../components/ErrorBoundry'
import Header from '../components/Header'
import './MainPage.css'

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  filteredRobots = () => {
    const { robots, searchField } = this.props
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props

    if (isPending) {
      return <h1 className='f1'>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
  }
}

export default MainPage
