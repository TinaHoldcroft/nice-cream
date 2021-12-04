function Loader(props) {

    return (
        <div className={props.class}>
            <div className="loader-wrapper">
                <div className="load">loading...</div>
            </div>
        </div>
    )
}

export default Loader;