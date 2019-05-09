class Browse extends React.Component {
    render() {
        return (
          <div className="rowse">
            <div className="browseContainer">
              <form action="/browse" method="post">
                <input type="hidden" name="kind" value="search"></input>
                <input id="search" type="text" name="q" placeholder='Search...' value=""></input>
                <input className="button" id="button" type="submit" value="Search"></input>
              </form>
            </div>
            <div className="postContainer">
            {this.props.children}
            </div>
          </div>
        );
    }
  }

  ReactDOM.render(
  <Browse />,
  document.getElementById('root')
  );