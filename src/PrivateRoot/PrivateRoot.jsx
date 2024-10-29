import { Navigate, useParams } from "react-router-dom";




// i mean gain authoraigation it's not pernament just use tasting purpopse
const i = 10;



function PrivateRoot({ children }) {

    if (i == 100) {
        return children;
    }
    else{
        return <Navigate to={`/`} />;
    }
}

export default PrivateRoot