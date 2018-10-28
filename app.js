const title = <h1>My First React Element</h1>;
const desc = <p>I just learned out to create a React node and render it into the DOM</p>;
const desc_2 = <p>Some more text</p>;

const header = React.createElement(
  'header',
   null,
   title,
   desc,
   desc_2
);


ReactDOM.render(
  header,
  document.getElementById('root')
);
