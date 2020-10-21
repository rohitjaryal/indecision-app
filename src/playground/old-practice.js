console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

let count=0;

const onFormSubmit= (e) => {
    e.preventDefault();

    const value=e.target.elements.option.value;
    if(value){
        app.options.push(value);
        count++;
        console.log('value pushed',value);
        e.target.elements.option.value='';
        renderApp();
    }
    console.log(app.options);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <button name='removeAll' onClick={()=>{
        app.options.length=0;
        count=0;
        renderApp();
    }} >  Remove All</button>
    <h1>Total options {count}</h1>
    <ol>
      {
          app.options.map((option) => {
              return <li key={option}>{option}</li>;
          })
        }
        {/* {renderApp} */}
    </ol>
    <form onSubmit={onFormSubmit}>
        <input id='option'/>
        <button >Add option</button>
    </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
