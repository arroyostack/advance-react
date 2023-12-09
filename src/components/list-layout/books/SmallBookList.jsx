
export const SmallBookList = ({ book }) => {
    const { name, price } = book;
    return (
        <p>Name: { name }, Price: { price }</p>
    );
};
