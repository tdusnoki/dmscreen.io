import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import { randomId, rollD20 } from './utils';
import { initialState } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsterList: [],
      monsterData: {},
      fullMonsterList: [],
      elements: initialState,
    };
    this.updateName = this.updateName.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
    this.updateHitpoints = this.updateHitpoints.bind(this);
    this.updateArmorClass = this.updateArmorClass.bind(this);
    this.addCard = this.addCard.bind(this);
    this.nextPlayer = this.nextPlayer.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.highlightCard = this.highlightCard.bind(this);
    this.addMonster = this.addMonster.bind(this);
    this.monsterFetcher(true, null);
  }
  
  monsterFetcher = (all, url) => {
    if (all === true) {
      fetch("http://www.dnd5eapi.co/api/monsters")
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.setState({ monsterList: json.results });
        });
    } else {
      fetch(`http://www.dnd5eapi.co${url}`)
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.setState({ monsterData: json });
        });
    }
  };

  selectMonster = event => {
    let monsterInfo = this.state.monsterList.filter(
      monster => monster.name === event.target.value
    )[0];
    this.monsterFetcher(false, monsterInfo.url);
  };

  addMonster = () => {
    let monster = this.state.monsterData;
    const { elements } = this.state;
    elements[elements.length] = {
      id:randomId(),
      name: monster.name,
      initiative: rollD20() + (Math.floor((monster.dexterity - 10)/2)),
      hitpoints: monster.hit_points,
      armorclass: monster.armor_class
    }
    this.sortElements();
  }
  updateName(id, e) {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].name = value;
    this.setState({ elements });
  }

  updateHitpoints(id, e) {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].hitpoints = Number(value);
    this.setState({ elements });
  }
  
  updateArmorClass(id, e) {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].armorclass = Number(value);
    this.setState({ elements });
  }

  updateInitiative(id, e) {
    clearTimeout(this.timeout_);
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].initiative = Number(value);
    this.setState({ elements });
    this.timeout_ = setTimeout(() => this.sortElements(), 500);
  }

  sortElements() {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  addCard() {
    const { elements } = this.state;
    elements[elements.length] = {
      id: randomId(),
      name: `Player ${elements.length + 1}`,
      initiative: 0,
      hitpoints: 12,
      armorclass: 10,
    };
    this.sortElements();
  }
  
  nextPlayer() {
  }

  removeElement(id) {
    let { elements } = this.state;
    elements = elements.filter(el => el.id !== id);
    this.setState({ elements });
  }

  highlightCard() {
  }

  render() {
    const { elements } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p1>DM SCREEN</p1>
          <div>
            <button className="add" onClick={this.addCard}>Add New Card</button>
            <button className="add" onClick={this.addMonster}>Add Monster Card</button>
            <select onChange={event => this.selectMonster(event)}>
              {this.state.monsterList.map(monster => {
                return <option key={monster.name}> {monster.name}</option>;
              })}
            </select>
            {elements.map(element =>
              <Card
                key={element.id}
                name={element.name}
                initiative={element.initiative}
                hitpoints={element.hitpoints}
                armorclass={element.armorclass}
                id={element.id}
                onNameChange={this.updateName}
                onInitiativeChange={this.updateInitiative}
                onHitpointsChange={this.updateHitpoints}
                onArmorClassChange={this.updateArmorClass}
                onRemove={this.removeElement}
                nextTurn={this.nextPlayer}
              />
            )}
            <button className="next" onClick={this.nextPlayer}>Next Player</button>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
