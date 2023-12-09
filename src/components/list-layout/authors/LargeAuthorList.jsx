export const LargeAuthorList = ({ author }) => {
    const { name, age, country, books } = author;
    return (
        <>
            <h2>{ name }</h2>
            <p>{ age }</p>
            <p>{ country }</p>
            <h2>Books</h2>
            <ul>
                { books.map(book => (
                    <li key={ book }>{ book }</li>
                )) }
            </ul>
        </>
    );
};
