import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import 'tachyons';
import Scroll from '../components/Scroll';
import ErrorBwoundary from '../components/ErrorBoundary';

class App extends React.Component {
    state = {
        robots: [],
        searchfield: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json()
        })
            .then(robotsFetched => this.setState({ robots: robotsFetched }))

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (!robots.length)
            ? <h1>Loading...</h1>
            : (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBwoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBwoundary>
                    </Scroll>
                </div>
            )
    }
}

export default App;