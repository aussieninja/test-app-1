const title = <h1>My First React Element</h1>;
const desc = <p>I just learned out to create a React node and render it into the DOM</p>;
const sub_heading = <p>Now with more text</p>;

const header = React.createElement(
  'header',
   null,
   title,
   desc,
   sub_heading
);


ReactDOM.render(
  header,
  document.getElementById('root')
);
