const desc =  'I just learned out to create a React node and render it into the DOM';
const myTitleID = 'main-title';
const name = 'Guil';

const header = (
 <header>
   {/* this is my heading */}
   <h1 id={mtTitleID}>{ name }'s First React Element!</h1>
   <p className="main-desc">{ desc }</p>
 </header>
);


ReactDOM.render(
  header,
  document.getElementById('root')
);
