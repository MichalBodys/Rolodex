import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosters: [
        {
          name: 'Linda',
          id: '1',
        },
        {
          name: 'Jack',
          id: '2',
        },
        {
          name: 'Frank',
          id: '3',
        },
        {
          name: 'Andrei',
          id: '4',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.mosters.map(moster => {
          return (
            <div key={moster.id}>
              <h1>{moster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
