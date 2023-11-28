import ErrorMessage from "../errorModal/errorModal"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"


const Page404 = () => {
    return(
        <>
        <Helmet>
            <meta
            name="description"
            content='Error'
            />
            <title>Error page</title>
        </Helmet>
        <div>
            <ErrorMessage/>
            <p style = {{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize':'24px'}}>Page doesn't exist</p>
            <Link style = {{'display': 'block', 'textAlign' : 'center', 'fontWeight':'bold', 'fontSize' : '24px', 'marginTop': '30px'}} to = "/"> Back to main page</Link>
        </div>
        </>
    )
}

export default Page404