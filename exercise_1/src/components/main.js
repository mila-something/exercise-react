import '../App.css'
const Main = ({mainTitle, mainSubtitle, list}) => {
    return (
        <main className="mainStyle">
      <p>{mainTitle}</p>
      <p>{mainSubtitle}</p>
      <ul>
        {
        list.map((item) => (<li key={`${item} ${Date}`}>{item}</li>))
        // list.map((item) => (<li>{item}</li>))
        }

        {/* <li>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li> */}
      </ul>
     </main>
    )
}
export default Main;