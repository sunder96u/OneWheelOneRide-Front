export default function Trails () {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1>Trails</h1>
                    <input type="text" className="form-control" placeholder="Search trails" />
                    <button type="button" className="btn btn-primary">Search</button>
                </div>
                <div className="col-md-12">
                    <p>List of trails here</p>
                </div>
            </div>
        </div>
    )
}