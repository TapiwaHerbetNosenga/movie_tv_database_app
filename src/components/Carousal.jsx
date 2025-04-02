import cars from "/cars.jpg";

export default function Carousal() {
  return( 
  <div>
    <h1>Carousal of Recently added movies</h1>
    <div className=" w-fit h-fit">
      <img src={cars} className="w-full h-full" />  
    </div>

  </div>
  );
}
