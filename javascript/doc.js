class Menu extends React.Component {
    constructor(props) {
      super(props);
      console.log("constructor");
    }
    
    componentDidMount() {
      console.log("componentDidMount");
    }
    
    componentWillUnmount() {
      console.log("componentWillUnmount");
    }
    
    render() {
      console.log("render");
    
      return (
        <ul>
          <li><a>Home</a></li>
          <li><a>Sobre</a></li>
          <li><a>Contato</a></li>
        </ul>
      )
    }
  }