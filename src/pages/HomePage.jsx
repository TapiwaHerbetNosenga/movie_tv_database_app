import Carousal from "../components/Carousal";
import TopRated from "../components/TopRated";
import OurPicks from "../components/OurPicks";

export default function HomePage() {
  return (
    <div className="bg-green-700 flex flex-col justify-center ">
     
      {/* first row of landing page */}
      <div className="grid grid-cols-5">

        {/* Carousal */}
        {/* Width scrolling started here from the col span attribute */}
        <div className="col-span-3">
          <Carousal />
        </div>

        {/* Top rated */}
        <div className="col-span-2">
          <TopRated />
        </div>
      </div>
      
      <div className="">
          <OurPicks />
        </div>
    
    </div>
  );
}
