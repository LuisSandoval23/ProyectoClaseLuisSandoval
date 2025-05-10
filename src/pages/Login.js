import {useState} from 'react';

function Login(){
const [email, setEmail] = useState();

    return(  
        <div 
            className="d-flex align-items-center justify-content-center"
            style={{ height: '100vh'}}>
            <div className="card p-4" style={{width: '300px'}}>
                <h2 className="text-center mb-3"> Iniciar Sesion</h2>
                <form onSubmit={() => {}}>
                    <input type="email" 
                    className="from-control mb-3" 
                    placeholder="Ingrese su corro" 
                    value={"Maria"} 
                    onChange={() => {}}/>

                 <button 
                    className="btn btn-primary w-100"
                    type="submit">
                    ingresar  
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;