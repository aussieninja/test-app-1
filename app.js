const title = <h1>My First React Element</h1>;
const desc = <p>I just learned out to create a React node and render it into the DOM</p>;
const sub_heading = <p>Now with more text in a subheading</p>;
const name = 'Adam';
const welcome = <p>Welcome {name}!</p>

const message = (
<p> Hello there! </p>
);

const box = (
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1>HEADER</h1>
        </Row>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
        </Row>
      </Column>
);


const header = React.createElement(
  'header',
   null,
   title,
   desc,
   sub_heading,
   welcome,
   message,
   box
);




ReactDOM.render(
  header,
  
  document.getElementById('root')
);
