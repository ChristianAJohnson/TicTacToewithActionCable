
class Move extends React.Component {
  render() {
    return (
      <div className='tile col-xs-4' id={ this.props.tile }>
        <span className={ this.props.imageClass }/>
      </div>
    )
  }
};

