
export const RightSidePane = ({ title }) => {
    return (
        <h1 style={ { background: "red" } }>{ title ? title : 'Hello Right' }</h1>
    );
};