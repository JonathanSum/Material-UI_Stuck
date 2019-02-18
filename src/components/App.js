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

      accumulator[muscles] = accumulator[muscles]
       ? [...accumulator[muscles], exercise]
       : [exercise]

      return accumulator
     }, {})
     )
  }
  handleCategorySelect=category=>{
    this.setState({
      category

    })
  }
  handleExerciseSelect=id=>{
    this.setState(({ exercises })=>({
      exercise: exercises.find(ex=>ex.id=== id)
    }))
  }
  handleExerciseCreated = exercise =>{
      this.setState(({exercises})=>({
        exercises:[
          ...exercises,
          exercise
      ]
      }))
  }
  render() {
    const exercises =this.getExercisesByMuscles(),
    {category, exercise}=this.state
    return (
      <Fragment>
        <Header muscles={muscles}
        onExerciseCreate={this.handleExerciseCreated}
        />
        <Exercises
         exercise={exercise}
         category={category}
         exercises={exercises}
         onSelect={this.handleExerciseSelect}/>
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>


    );
  }
}

export default App;
