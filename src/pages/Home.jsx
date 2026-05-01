import bg from "../assets/bgImageHome.jpg";

const Home=()=>{
    return(
        <div className="py-63 bg-cover bg-center brightness-75 saturate-75"  style={{backgroundImage: `url(${bg})`}}>
            <h4>Home Component</h4>
        </div>
    )
}
export default Home;