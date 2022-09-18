import { Link } from "react-router-dom";


const HomeContainer = () => {
    return (
        <div className=''>
            <h1>메인 홈</h1>
            {/* <div>
                <a href="https://gabrielyoon7.github.io/boilerplate-react/" target="_blank">git page에서 보기</a>
            </div> */}
            <h2>CSS</h2>
            <div>
                <Link to='bootstrap'>bootsrap</Link>
            </div>
            <div>
                <Link to='mui'>material-ui</Link>
            </div>
            <h2>React</h2>
            <div>
                <Link to='redux/counter'>redux</Link>
            </div>
        </div>
    )
}

export default HomeContainer;