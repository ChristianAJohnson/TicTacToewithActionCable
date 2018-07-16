MovePresenter = React.createClass({
  getInitialState: function() {
    return ({ moves: this.props.moves })
  },

  updateMoves: function(data) {
    var currentMoves = this.props.moves
    var newMoves = currentMoves.push(data.move)
    this.setState({ moves: newMoves })
    var player = (data.move.position % 2) || 2

    console.log('Player ' + player + ' played!')

    if (data.winner) {
      alert('Player ' + player + ' wins!')
      window.location.reload()
    } else if (data.tie) {
      alert('We have a tie')
      window.location.reload()
    }
  },

  componentDidMount: function() {
    this.setupCable();
  },

  setupCable: function() {
    App.move = App.cable.subscriptions.create("MoveChannel",
    {
      connected: function () {
      },

      disconnected: function () {
      },

      received: function(data) {
        this.updateMoves(data);
      },

      selectTile: function(data) {
        this.perform('select_tile', { tile: data })
      },

      updateMoves: this.updateMoves
    });
  },

  render: function () {
    return (
      <div id='moves' className="col-xs-12 col-md-4 col-lg-4 col-lg-offset-4">
        <MoveList moves={ this.props.moves } />
      </div>
    )
  }
})
