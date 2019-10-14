import React, {useState} from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = (props) => {

  // state = {
  //   front: true
  // }

  const [front, setFront] = useState(true)

  // componentDidMount(){
  //   // setInterval(() => {this.setState({front: !this.state.front})}, 500)
  // }
    // console.log(new Date().getMilliseconds())
    const { name, sprites, stats } = props.pokemon
    return (
      <Card onClick={() => {setFront(!front)}}>
        <div>
          <div className="image">
            <img src={ front ? sprites.front : sprites.back } alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
}

export default PokemonCard
