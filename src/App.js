import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      SearchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { robots: users };
        })
      );
  }

  onSearchChange = event => {
    console.log(event.target.value);
    const SearchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { SearchField };
    });
  };

  render() {
    console.log('render');

    const { robots, SearchField } = this.state;
    const { onSearchChange } = this;

    const filteredrobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(SearchField);
    });

    return (

      <div className="App">
      <h1 className='app-title'>Robots Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange}  placeholder={'Search robots'} className={'robots-search-box'} />
        <CardList robots={filteredrobots} />
      </div>
    );
  }
}
export default App;
