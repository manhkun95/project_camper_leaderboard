import React from 'react';
import Row from './Row';
import '../camper_leaderboard.css';

var urlCamperRecent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    fetch(urlCamperRecent)
    .then(response => response.json())
    .then((data)=>{
      this.state.users = data
      this.setState(this.state)
    })
  }

  sortDataAlltime(){
    this.state.users.sort((a,b)=> (a.alltime - b.alltime)).reverse()
    this.setState(this.state)
  }

  sortDataRecent(){
    this.state.users.sort((a,b)=> (a.recent- b.recent)).reverse()
    this.setState(this.state)
  }

  render() {
    const { users} = this.state
    return (
    	<div className = "container">
    		<table className ='table table-striped table-bordered'>
          <thead>
            <tr>
              <td colSpan={4} id = "header"> <h3 className= "text-center">Loader Board</h3></td>
            </tr>
            <tr>
              <td>#</td>
              <td> Camper Name</td>
              <td className= "text-center"> <a href = "#" onClick = {this.sortDataRecent.bind(this)}>Points in past 30 days</a></td>
              <td className= "text-center"> <a href = "#" onClick = {this.sortDataAlltime.bind(this)}>All time points</a></td>
            </tr>
          </thead>
          <tbody>

              {
                users.map(
                  (user,id) => <Row key ={id} id = {id + 1} user = {user} />
                )
              }

          </tbody>

        </table>
    	</div>
    )
  }
}

export default Board
