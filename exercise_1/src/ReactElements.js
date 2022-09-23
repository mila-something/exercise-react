import './App.css'

export default function App() {
  const headerStyleObject = {backgroundColor: '#75a3b1', padding: '10px'}

  const header = (
    <header style={headerStyleObject}>
    <h1>Welcome to React exercise</h1>
    <h2>Getting started with React</h2>
    <p>Mila Stojchevska</p>
    <small>Sep 23.09.2022</small>
   </header>
  )
  const main = (
    <main className="mainStyle">
      <p>
        Working with React styles and React elements
      </p>
      <p>
        Prerequirements to get started with React.js
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
     </main>
  )
  const footer = (
    <footer style={{backgroundColor: '#75a3b1', width: '100%', textAlign: 'center'}}>
        <p>Copyright 2022</p>
    </footer>
  )
  
  return (
    // <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
    // ili <div style={{...headerStyleObject}}>
    <div className="container">
      {header}
      {main}
      {footer}
    </div>
  );
};
