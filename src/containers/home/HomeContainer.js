import { Link } from "react-router-dom";


const HomeContainer = () => {
    return (
        <div className=''>
            메인 홈
            {/* <div>
                <a href="https://gabrielyoon7.github.io/boilerplate-react/" target="_blank">git page에서 보기</a>
            </div> */}
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