'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var count = 0;

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var value = e.target.elements.option.value;
    if (value) {
        app.options.push(value);
        count++;
        console.log('value pushed', value);
        e.target.elements.option.value = '';
        renderApp();
    }
    console.log(app.options);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { name: 'removeAll', onClick: function onClick() {
                    app.options.length = 0;
                    count = 0;
                    renderApp();
                } },
            '  Remove All'
        ),
        React.createElement(
            'h1',
            null,
            'Total options ',
            count
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { id: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
