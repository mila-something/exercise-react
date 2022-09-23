import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

export default function App() {
  
  const headerData = {
    title: 'Welcome to React exercise',
    subtitle: 'Getting started with React',
    name: 'Mila Stojchevska'
  }
  const mainData = {
    mainTitle: 'Working with React styles and React elements',
    mainSubtitle: 'Prerequirements to get started with React.js',
    list: ['HTML', 'CSS', 'JS']
  }
  const year = Date();
  
  return (
    // <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
    // ili <div style={{...headerStyleObject}}>
    <div className="container">
      {/* send header data with spread operator */}

      <Header {...headerData}/>
      <Main mainTitle={mainData.mainTitle} mainSubtitle={mainData.mainSubtitle} list={mainData.list}/>
      <Footer year={year}/>
    </div>
  );
};
