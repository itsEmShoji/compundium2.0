
class Home extends React.Component {
    render() {
        return (
          <div>
          {this.props.children}
              <div id="homeblurb">
                <h1 className="titles"> Welcome to Compundium! </h1>
              </div>
          </div>
        );
    }
}

class Browse extends React.Component {
  render() {
      return (
        <div>
          <span className="container">
            <form action="/browse" method="post">
              <input type="hidden" name="kind" value="search"></input>
              <input id="search" type="text" name="q" placeholder='Search...' value=""></input>
              <input className="button" id="button" type="submit" value="Search"></input>
            </form>
          </span>
          {this.props.children}
        </div>
      );
  }
}

ReactDOM.render(
    <div>
    <Home/>
    <Browse/>
    </div>,
    document.getElementById('root')
    );