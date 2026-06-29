import "./Header.css";

function Header() {
    return (
        <header className="site-header">
            <h1 className="header-name">OurSpace</h1>
            <nav className="feed-select">
                <ul className="header-list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">For You</a>
                    </li>
                </ul>
            </nav>
            <a className="profile" href="#">
                Profile
            </a>
        </header>
    );
}

export default Header;
