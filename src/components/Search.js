const Search = () => {
    return (
        <header>
            <h2 className="header__title">Chercher. Explorer. Acheter.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Saisissez une adresse, un quartier, une ville ou un code postal."
            />
        </header>
    );
}

export default Search;