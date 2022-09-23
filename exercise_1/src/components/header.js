export default function Header(props) {
    const headerStyleObject = {backgroundColor: '#75a3b1', padding: '10px'}
    // log the props objects before 
    return (
            <header style={headerStyleObject}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.name}</p>
            <small>{Date()}</small>
           </header>
    )
}