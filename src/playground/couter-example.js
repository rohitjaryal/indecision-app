class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);

        this.state ={
            count:parseInt(localStorage.getItem('count'),10)
        };
    }

    componentDidUpdate(prevProps, ){
        localStorage.setItem("count",this.state.count);
        console.log('updated!',prevProps,prevState);
    }

    componentDidMount(){
        this.setState(()=>{
            count: parseInt(localStorage.getItem('count'),10);
        console.log('mounted again.!!!',localStorage.getItem('count'));
        });

    }

    handleAddOne() {
        this.setState((prevState)=>{
        return this.state.count=prevState.count+1;
        });
    }

    handleMinusOne() {
        this.setState((prevState)=>{
            return this.state.count=prevState.count-1;
        })

    }

    handleReset() {
        console.log('handleReset');
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps ={
// count:0
// };

ReactDOM.render(<Counter count={100}/>, document.getElementById('app'));