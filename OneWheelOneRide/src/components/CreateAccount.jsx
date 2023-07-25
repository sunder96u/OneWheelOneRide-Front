



export default function CreateAccount () {
    return (
        <div className="container">
            <div className="row">
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="userName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordValidate" className="form-label">Re-enter Password</label>
                        <input type="text" className="form-control" id="passwordValidate" />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </div>
                </form>
             </div>
        </div>
    )
}