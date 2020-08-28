import React, { Component } from 'react'
import CardList from './Component/CardList'

 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        monsters:[],
        inputText:"" 
     } 
   }
   componentDidMount(){
     fetch(`https://jsonplaceholder.typicode.com/users`)
     .then(response=>response.json())
     .then(users=>this.setState({
       monsters:users
     }))
   }
  render() {
    const {monsters,inputText}=this.state
      const filteredMonsters=monsters.filter(monster=>
        monster.name.toLowerCase().includes(inputText.toLowerCase())
        )
    return (
      <div className="App">
        <input
        type='text'
        name='input field'
        placeholder="search here duhh"
        onChange={(event)=>{
          this.setState({
            inputText:event.target.value
          })
        }}
        
        />        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
