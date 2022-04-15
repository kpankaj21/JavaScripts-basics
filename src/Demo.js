import React from 'react'

// const Demo = (props) => {
//   return (
//     < > 
//   <h2> i like {props.color} color</h2>
//     </ >
//   )
// }


class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: "Ford",
      model: "Mustabbg",
      color: "red",
    }
  }
  changeColor = () => {
    this.setState({ color: "blue" })
  }
  render() {
    return (
      <div>
        <h3> Brand of the car :{this.state.brand}</h3>
        <h3> Color of the car :{this.state.color}</h3>
        <button onClick={this.changeColor}>click</button>
      </div>
    )
  }
}

export default Demo