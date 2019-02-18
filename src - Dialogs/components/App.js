import React, { Component,Fragment } from 'react';
import {Header, Footer} from './Layouts'
import Exercises from './Exercises'
import {muscles,exercises} from '../store.js'

class App extends Component {
  state={
    exercises,
    category:'',
    exercise:{}
  }
  getExercisesByMuscles(){
    return Object.entries(this.state.exercises.reduce((accumulator, exercise) => {
      const { muscles } = exercise
      console.log('Here is your '+{ muscles })

      accumulator[muscles] = accumulator[muscles]
       ? [...accumulator[muscles], exercise]
       : [exercise]

      return accumulator
     }, {})
     )
  }
  handleCategorySelected=category=>{
    this.setState({
      category

    })
  }
  handleExerciseSelected=id=>{
    this.setState(({ exercises })=>({
      exercise: exercises.find(ex=>ex.id=== id)
    }))
  }
  render() {
    const exercises =this.getExercisesByMuscles(),
    {category, exercise}=this.state
    return (
      <Fragment>
        <Header/>
        <Exercises
         exercise={exercise}
         category={category}
         exercises={exercises}
         onSelect={this.handleExerciseSelected}/>
        <Footer
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelected}
        />
      </Fragment>


    );
  }
}

export default App;
