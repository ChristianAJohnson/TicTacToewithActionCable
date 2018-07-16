var MoveList = React.createClass({
  render: function() {
    moveList = []

    var imageForTile = function(tile) {
      var move = _.findWhere(this.props.moves, { tile: tile })

      if (move != undefined)
        if (move.position % 2)
          return 'X_image'
        else
          return 'O_image'
      else
        return null
    }.bind(this)

    for(i=1; i < 10; i++) {
      moveList.push(<Move key={ i } tile={ i } imageClass={ imageForTile(i) } />)
    }

    return (<div>{ moveList }</div>)
  }
});
