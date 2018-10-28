const title = <h1>My First React Element</h1>;
const desc = <p>I just learned out to create a React node and render it into the DOM</p>;
const sub_heading = <p>Now with more text in a subheading</p>;
const name = 'Adam';
const welcome = <p>Welcome {name}!</p>

const header = React.createElement(
  'header',
   null,
   title,
   desc,
   sub_heading,
   welcome
);


ReactDOM.render(
  header,
  document.getElementById('root')
);
