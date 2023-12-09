export const SmallAuthorList = ({ author }) => {
    const { name, age } = author;
    return (
        <p>Name: { author?.name }, Age: { author?.age }</p>
    );
};
