const ProductDescription = () => {
  return (
    <div className="max-padd-container mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn-dark rounded-xs !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn-dark rounded-xs !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn-dark rounded-xs !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eius dolorem incidunt fugiat, adipisci, accusantium cupiditate odio
          corporis optio ea ducimus quisquam labore maiores iure saepe iste
          facere? Autem, nisi.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eius dolorem incidunt fugiat, adipisci, accusantium cupiditate?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
