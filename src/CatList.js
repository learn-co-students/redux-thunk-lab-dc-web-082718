import React from 'react'

class CatList extends React.Component{
  render(){
    return(
      <React.Fragment>
      {this.props.catPics.map(catPic => {
        return <div><img src={catPic} /></div>
      })}
      </React.Fragment>
    )
  }
}

export default CatList
