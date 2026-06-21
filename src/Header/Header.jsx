import './Header.css'

function Header() {
    return(
        <header>
            <h1 id="header_name">OurSpace</h1>
            <nav>
                <ul id="header_list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">For You</a></li>
                </ul>
            </nav>
            <a id="profile" href="#">Profile</a>
        </header>
    );
}

export default Header