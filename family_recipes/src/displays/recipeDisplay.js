import React from 'react'

import axios from 'axios'

class RecipeDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }


  componentDidMount() {
    axios.get('http://localhost:4000/api/dish')
    .then( res => {
      this.setState({
        dish: res.data
      })
    })
    .catch( err => {
      return err
    })
  }

  render() {
    return(
      <div>
        {this.state.dish.map( dish => {
          return <div>
            <p>{dish.id}</p>
            <p>{dish.name}</p>
          </div>
        })}
      </div>
    )
  }
}

export default RecipeDisplay