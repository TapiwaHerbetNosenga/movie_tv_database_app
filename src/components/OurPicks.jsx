import cars from "/cars.jpg";
export default function OurPicks() {
  return (
    <div className=" bg-blue-500 flex flex-col justify-start w-full h-full">
      {/* Title of row */}
      <div>
       <p> Our Picks</p>
      </div>
      {/* item cards row */}
      <div className="flex flex-row justify-around h-max">
        <div className="w-10 h-8">
          <img src={cars} className="w-full h-full" />
          <p>Title of card</p>
        </div>
        <div className="w-10 h-8">
          <img src={cars} className="w-full h-full" />
          <p>Title of card</p>
        </div>
        <div className="w-10 h-fit">
          <img src={cars} className="w-full h-full" />
          <p>Title of card</p>
        </div>
        <div className="w-10 h-8">
          <img src={cars} className="w-full h-full" />
          <p>Title of card</p>
        </div>
      </div>
    </div>
  );
}


