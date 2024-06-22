import Business from "../../Business/Business";
import Navbar from "../components/Navbar1";
const ProductListPage = () => {

    const topBusinesses = [
        { name: 'Business 1', description: 'Description of Business 1', image: 'https://via.placeholder.com/150' },
        { name: 'Business 2', description: 'Description of Business 2', image: 'https://via.placeholder.com/150' },
        { name: 'Business 3', description: 'Description of Business 3', image: 'https://via.placeholder.com/150' },
        { name: 'Business 4', description: 'Description of Business 4', image: 'https://via.placeholder.com/150' },
        { name: 'Business 5', description: 'Description of Business 5', image: 'https://via.placeholder.com/150' },
        { name: 'Business 6', description: 'Description of Business 6', image: 'https://via.placeholder.com/150' },
        { name: 'Business 7', description: 'Description of Business 7', image: 'https://via.placeholder.com/150' },
        { name: 'Business 8', description: 'Description of Business 8', image: 'https://via.placeholder.com/150' },
        { name: 'Business 9', description: 'Description of Business 9', image: 'https://via.placeholder.com/150' },
        { name: 'Business 10', description: 'Description of Business 10', image: 'https://via.placeholder.com/150' },
        { name: 'Business 11', description: 'Description of Business 11', image: 'https://via.placeholder.com/150' },
        { name: 'Business 12', description: 'Description of Business 12', image: 'https://via.placeholder.com/150' },
    ];


    return (
        <>
            <Navbar />
            <div className="container">

                <h1 style={{ textAlign: "center" }}>Best Results for {`<Product Name>`}</h1>
                <div className="row mt-2">
                    {
                        topBusinesses.map((bussiness, index) => {
                            return(
                            <div className="col-md-3 mb-4" key={index}>

                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={bussiness.image} className="card-img-top" alt="..." />
                                    <div className="card-body" style={{backgroundColor:"skyblue"}}>
                                        <h5 className="card-title">{bussiness.name}</h5>
                                        <p className="card-text">{bussiness.description}</p>
                                        <a href="#" className="btn btn-primary">Go to {bussiness.name} page</a>
                                    </div>
                                </div>
                            </div>
                            )

                        })
                    }
                </div>

            </div>
        </>
    )
}

export default ProductListPage;