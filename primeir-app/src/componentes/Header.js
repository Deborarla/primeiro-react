import './Header.css'

function Header (props){
    return (
        <header className = "Header">
            <h1>{props.children}</h1>
        </header>
    )
}
export default Header