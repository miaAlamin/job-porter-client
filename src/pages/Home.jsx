import Banner from "./Banner";
import HotsJobs from "./HotsJobs";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-11/12 mx-auto mt-10">
            <HotsJobs></HotsJobs>
            </div>
        </div>
    );
};

export default Home;