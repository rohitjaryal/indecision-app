let count=0;

const reset = () => {
count=0;
console.log(count);
renderApp();
};


const minus= () =>{
    count--;
    console.log(count);
    renderApp();
};

const plus = () =>{
    count++;
    console.log(count);
    renderApp();
}


const appRoot= document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{count}</h1>
    <button id='' className='plus' onClick={plus}>+1</button>
    <button id='' className='minus' onClick={minus}>-1</button>
    <button id='' className='reset' onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderApp();