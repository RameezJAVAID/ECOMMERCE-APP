import ApiHandlerScreen from "../pages/apihandlerscreen"

const Product = () => {
    return (
        <>
            <div className="container home-container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1 className="home-title">Welcome to the Products Page</h1>
                    </div>
                </div>
            </div>
            
            <ApiHandlerScreen />

        </>
    )
}


export default Product