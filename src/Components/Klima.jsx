function Klima( {name, country, state, main, description, temp, min, max, icon} ){
    return(
        <div>
            <h1>{name}</h1>
            <h2>{state}</h2>
            <h2>{country}</h2>
            <h2>{temp}</h2>
            <h2>{main}</h2>
            <h3>{description}</h3>
        </div>
    )
}

export default Klima