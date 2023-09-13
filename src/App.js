import { Component } from 'react';
import './App.css';

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

  render() {
    const filteredMOnsters = this.state.monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(this.state.SearchField);
    });

    console.log('render');
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={event => {
            console.log(event.target.value);
            const SearchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { SearchField };
            });
          }}
        />
        {filteredMOnsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
