import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
          return { monsters: users };
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

    const { monsters, SearchField } = this.state;
    const { onSearchChange } = this;

    const filteredMOnsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(SearchField);
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange}  placeholder={'Search monsters'} className={'search-box'} />
        <CardList monsters={filteredMOnsters} />
      </div>
    );
  }
}
export default App;
