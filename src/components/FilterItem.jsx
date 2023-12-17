

const filterItem = (props) => {
    return (
        <>
        <div className="filter-item">
            <i className = {props.icon} />
            {props.text}
        </div>
        </>
    );
};

export default filterItem