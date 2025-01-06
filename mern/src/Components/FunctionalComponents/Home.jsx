import './Home.css';

var NavBar = () => {
    var styling = {
        fontSize: "30px",
        color: "blue",
        textDecoration: "underline"
    };
    return (
        <header className="navbar">
            <h1 style={styling}>KONGU ENGINEERING COLLEGE, PERUNDURAI</h1>
            <h2 id="department">DEPARTMENT OF CSE</h2>
            <p className="welcome-message">WELCOME TO KEC</p>
        </header>
    );
};

export default NavBar;
