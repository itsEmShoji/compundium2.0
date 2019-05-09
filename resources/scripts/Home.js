
class Home extends React.Component {
    render() {
        return (
          <div>
          <div className="homepageInfo">{this.props.children}</div>
            <h1 className="title"> Welcome to Compundium2! </h1>
            <div className="homeContent"> 
            <div className="homepageInfo"> Compundium2 is a remake of <a href="https://punr-compendium.appspot.com">Compundium</a>, a social media site built for CSSIx 2017 to share puns with others!</div>
            <div className="homepageInfo">(compendium of puns = Compundium!)</div>
            <h3 className="homepageInfo2">Compundium2 was made by <a href="https://itsemshoji.github.io/">Emily Shoji</a>, LMUCS'19</h3>
            </div>
          </div>
        );
    }
}

ReactDOM.render(
    <Home/>,
    document.getElementById('root')
    );