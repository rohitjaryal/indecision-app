class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }


    handleVisibility() {
        this.setState((prevState) => {
            console.log("prev state", prevState.visibility);
            return { visibility: !prevState.visibility };
        });

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility? <p>hide</p>:<p>show</p>}</button>
                {this.state.visibility && <h3 >Details</h3>}
            </div>

        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const heading= 'Visibility toggle';
// const conditionalContent= 'This can be shown now!';

// let isLabelHidden=true;

// const renderApp=() => {
//     const template=(
//         <div>
//             <h1>{heading}</h1>
//             <button onClick={()=> {
//                 console.log('clicked with value',isLabelHidden);
//                 isLabelHidden=!isLabelHidden;
//                 renderApp();
//             }}>Show details</button>
//             <h3 hidden={isLabelHidden}>{conditionalContent}</h3>
//         </div>
//     );

//     ReactDOM.render(template,appRoot);
// };

// const appRoot=document.getElementById('app');



// renderApp();