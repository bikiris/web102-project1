import "./App.css";
import Card from "./components/card";

function App() {
  //All images sourced from Yelp
  const restaurants = [
    {
      name: "JiangNan",
      type: "Asian Fusion",
      link: "https://www.jiangnanny.com/",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/qpp080-dQcccvbTh8fHtJw/o.jpg",
    },
    {
      name: "Nan Xiang Xiao Long Bao",
      type: "Shanghainese",
      link: "https://nanxiangxiaolongbao.com/",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/V0tRwYFv-LaMXhDsVJpG1Q/o.jpg",
    },
    {
      name: "Zou's",
      type: "Taiwanese",
      link: "https://www.zousny.com",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/iex37CPP3P2rvEJxWHXDTg/o.jpg",
    },
    {
      name: "Szechuan Mountain House",
      type: "Szechuan",
      link: "https://www.szechuanmountainhouse.com/",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/MpcZdr4ilou4AekCitNzdQ/o.jpg",
    },
    {
      name: "Friendship BBQ",
      type: "Chinese BBQ",
      link: "https://www.friendshipbbq.com/",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/Y6FNz3Jvldo39pfE3AsJMQ/o.jpg",
    },
    {
      name: "Hot Space Grilled Fish",
      type: "Szechuan",
      link: "https://www.yelp.com/biz/hot-space-grilled-fish-flushing-2",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/Wb33eqwOGggOrAGymrEZsw/o.jpg",
    },
    {
      name: "Taier Suancai Fish",
      type: "Szechuan",
      link: "https://www.yelp.com/biz/taier-suancai-and-fish-flushing-flushing",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/9j7aBND4U8jNyFlnDCKEbA/o.jpg",
    },
    {
      name: "Young and Rich",
      type: "Xiang Cuisine",
      link: "https://www.youngandrichnyc.com/",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/L_PzYKFS8RDz2GaQuBJwLQ/o.jpg",
    },
    {
      name: "Sha Xian Snacks",
      type: "Fujianese",
      link: "https://www.yelp.com/biz/sha-xian-snacks-%E6%B2%99%E5%8E%BF%E5%B0%8F%E5%90%83-queens",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/L1lMwjA0kOVtiKOO_kvF_g/o.jpg",
    },
    {
      name: "Happy Lamb Hot Pot",
      type: "Hot Pot",
      link: "https://www.yelp.com/biz/happy-lamb-hot-pot-flushing-2",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/rn2UGX0OZuiVRbNPQRFgHQ/o.jpg",
    }
  ];

  return (
    <>
      <h1 className='header'>Must Try Chinese Food in Downtown Flushing</h1>
      <div className='cards'>
        {restaurants.map((restaurant, index) => {
          return (
            <Card
              key={index}
              name={restaurant.name}
              type={restaurant.type}
              link={restaurant.link}
              image={restaurant.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
