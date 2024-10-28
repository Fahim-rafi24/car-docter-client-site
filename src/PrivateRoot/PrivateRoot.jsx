import { Navigate, useParams } from "react-router-dom";




// i mean gain authoraigation it's not pernament just use tasting purpopse
const i = 10;



function PrivateRoot({ children }) {
    const idLocation = useParams();
    console.log(idLocation.id)

    if (i == 100) {
        return children;
    }
    else{
        return <Navigate to={`/service_details/error/${idLocation.id}`} />;
    }
}

export default PrivateRoot