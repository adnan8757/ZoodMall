

const data = [
  {
    name: "Mobile A",
    image: "https://upload.zoodmall.com/app/homePageLayout/1721371610934.jpg",
    price: 299.99,
    rating: 4.5,
  },
  {
    name: "Mobile B",
    image:
      "https://upload.zoodmall.com/app/homePageLayout/1721371661351.jpg",
    price: 199.99,
    rating: 4.0,
  },
  {
    name: "Mobile C",
    image:
      "https://upload.zoodmall.com/app/homePageLayout/172137173581.jpg",
    price: 399.99,
    rating: 4.7,
  },
  {
    name: "Mobile D",
    image:
      "https://upload.zoodmall.com/app/homePageLayout/1721371825368.jpg",
    price: 149.99,
    rating: 3.8,
  },
];

const Sports = () => {
  return (
    <>
      <div className="lg:px-52 w-full mb-10">
        <div className="w-full flex  justify-center align-middle items-center mb-5">
            <div className="bg-blue-900 px-10 py-1 lg:w-[35%] text-center">
            <h1 className="font-bold text-2xl text-white">SPORTS TOOLS</h1>
            <p className="text-yellow-300 font-bold">10% CASHBACK</p>
            </div>
        </div>
        <div className="w-full lg:justify-normal justify-center flex gap-8 flex-wrap ">
          {data.map((value, i) => {
            return (
              <div
                className="w-[250px] bg-gray-200 rounded-lg shadow-xl p-2 "
                key={i}
              >
                <img src={value.image} alt="" />
                <p className="pt-3">{value.name}</p>
              
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sports;

