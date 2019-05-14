class Feed extends React.Component {
    render() {
        return (
            <div className="postContainer">
            {this.props.children}
            </div>
        );
    }
  }

  ReactDOM.render(
  <Feed/>,
  document.getElementById('root')
  );