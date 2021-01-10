function render() {
    const element = `<div>
    <div>Hello world</div>
    <div><input type="text"/></div>
    <div>${new Date().toLocaleTimeString()}</div>
    </div>`;

    document.getElementById('app1').innerHTML = element;

    const element2 = React.createElement(
        'div',
        null,
        React.createElement('div', null, 'Hello world'),
        React.createElement(
            'div',
            null,
            React.createElement('input', { type: 'text' }),
        ),
        React.createElement('div', null, new Date().toLocaleTimeString()),
    );

    ReactDOM.render(element2, document.getElementById('app2'));
}

setInterval(render, 1000);
