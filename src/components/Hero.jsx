import { Link } from "react-router-dom";
import PopularProducts from "./PopularProducts";

const Hero = () => {
  return (
    <section>
      <div className="max-padd-container bg-hero bg-cover bg-no-repeat h-[744px] w-full">
        <div className="relative top-24 xs:top-32">
          <h4 className="uppercase medium-18 tracking-wider">
            TRENDY TREASURES
          </h4>
          <h2 className="h1 capitalize max-w-[40rem]">
            Elevate Your Look{" "}
            <span className="text-secondary"> with Every Click.</span> Shop Now!
          </h2>
          <p className="my-5 max-w-[33rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iste
            in molestias aliquid incidunt. Deserunt suscipit recusandae cum
            maxime dolore!
          </p>
          {/* button */}
          <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
            <div className="text-center regular-14 leading-tight pl-5">
              <h5 className="uppercase font-bold">30% off</h5>
              <p className="regular-14">On All Items</p>
            </div>
            <Link to={""} className="btn-dark rounded-xl flexCenter !py-5">
              Shop Now
            </Link>
          </div>
          {/* NewCollections */}
          <div className="mt-16">
            <PopularProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
