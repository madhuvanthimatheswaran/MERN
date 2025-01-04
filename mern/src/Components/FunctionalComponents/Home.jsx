import '../../assets/css/Home.css';

var NavBar = () => {
    var styling = {
        fontSize: "30px",
        color: "blue",
        textDecoration: "underline" // Corrected camelCase
    };
    return (
        <header>
            <h1 style={styling}>KONGU ENGINEERING COLLEGE,PERUNDURAI</h1>
            <h2 id="idSEsg">DEPARTMENT OF CSE</h2>
            <p className='box-model'>
                WELCOME TO KEC
            </p>
        </header>
    );
}

export default NavBar;