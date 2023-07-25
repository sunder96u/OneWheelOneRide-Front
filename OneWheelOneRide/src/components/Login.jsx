
export default function Login () {

    return (
        <div className="container">
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="password"/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
                {/* <div className="mb-3">
                    <p>OR</p>
                </div>
                <div>
                    <button type="btn" className="btn btn-primary">Login with Google</button>
                </div> */}
                <div className="mb-3">
                    <p>New Here? <a>Create an Account</a></p>
                </div>
            </div>
        </div>
    )
}