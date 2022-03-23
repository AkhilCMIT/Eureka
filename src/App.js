import axios from 'axios';
function App(){

    return(
        <>
            <div className="topnav ">
            <h3>Testing App</h3>
            <a className="active" href="">Home</a>
            </div>
            <div className="buttons">
                <button>Java</button><br />
                <button>Python</button><br />
                <button>JavaScript</button>
            </div>
        </>
    );
}
export default App;