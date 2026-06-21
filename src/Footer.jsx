
function Footer() {
    return(
        <footer>
            {/*Curly braces allow for js in return statement*/}
            <p>&copy; {new Date().getFullYear()} OurSpace</p>
        </footer>
    );
}

export default Footer