import React from 'react';

class Row extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <tr>
    		  <td className = "id">{this.props.id}</td>
          <td className = "name"><img className = "iconImg" src = { this.props.user.img} />{this.props.user.username}</td>
          <td className = "recent text-center">{this.props.user.recent}</td>
          <td className = "alltime text-center">{this.props.user.alltime}</td>
        </tr>
    )
  }
}

export default Row
