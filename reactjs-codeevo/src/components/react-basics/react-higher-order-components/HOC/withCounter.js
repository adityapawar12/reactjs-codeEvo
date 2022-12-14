const withCounter = (WrappedComponent, incrementNumber) => {
  // GIVING NAME TO THE PROPS.
  //   class WithCounter extends React.Component {
  //     render() {
  //       return <WrappedComponent name={"Aditya"} />;
  //     }
  //   }

  // GIVING INCREMENT COUNT AND METHOD TO THE PROPS.
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
