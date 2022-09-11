import { Link } from "react-router-dom";


const HomeContainer = () => {
    return (
        <div className=''>
            메인 홈
            <div>
                <Link to='bootstrap'>bootsrap</Link>
            </div>
            <div>
                <Link to='mui'>material-ui</Link>
            </div>
        </div>
    )
}

export default HomeContainer;