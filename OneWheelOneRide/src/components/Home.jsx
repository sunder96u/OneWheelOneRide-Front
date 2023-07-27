import { Link } from 'react-router-dom'

export default function Home () {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <img className="card-img-top iconLrg" alt="..." src="data:image/jpeg;base64,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"></img>
                        <div className="card-body">
                            <h5 className="card-title">Shop Onewheel+ XR Parts</h5>
                            <p>Search our large selections of Onewheel+ XR parts and accessories</p>
                            <Link to="/Parts/2" className="btn btn-info">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <img className="card-img-top iconLrg" alt="..." src="data:image/jpeg;base64,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"></img>
                        <div className="card-body">
                            <h5 className="card-title">Shop Onewheel GT Parts</h5>
                            <p>Search our large selections of Onewheel GT parts and accessories</p>
                            <Link to="/Parts/1" className="btn btn-info">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <img className="card-img-top iconLrg" alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKHt7Eg0gVlQqCEIdsmwCDUAJjlT2ikLWeA&usqp=CAU"></img>
                        <div className="card-body">
                            <h5 className="card-title">Shop Onewheel Pint/PintX Parts</h5>
                            <p>Search our large selections of Onewheel Pint/PintX parts and accessories</p>
                            <Link to="/Parts/3" className="btn btn-info">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <img className="card-img-top iconLrg" alt="..." src="data:image/jpeg;base64,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"></img>
                        <div className="card-body">
                            <h5 className="card-title">Find Local Groups</h5>
                            <p>Find a local group to float with!</p>
                            <Link to="/Groups" className="btn btn-warning">Find Groups</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <img className="card-img-top iconLrg" alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_EkXTdGA16UFitVyL9kHuU_V3y4hbkiOIg&usqp=CAU"></img>
                        <div className="card-body">
                            <h5 className="card-title">Find Local Trails</h5>
                            <p>Find a local trail to enjoy</p>
                            <Link to="/Trails" className="btn btn-warning">Find Trails</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}