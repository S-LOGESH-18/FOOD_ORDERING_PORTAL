import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../FoodPageContent.css";


const Restaurants = () => {

  const history = useHistory();

  const [clickedCard, setClickedCard] = useState(null);

  const handleOnClick=(id)=>{
    console.log("Clicked",id);
    setClickedCard(id);
    
    history.push(`/nextfile/${id}`);
  };


  const foodItems = [

    { id: 1, foodName: 'Kosha Mangsho',Cuisine:'Cuisine : West Bengal' ,imageUrl: 'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/devshri-chatterji20180128134028494.jpeg' },
    { id: 2, foodName: 'Misal Pav',Cuisine:'Cuisine : Maharastra' ,imageUrl: 'https://www.secondrecipe.com/wp-content/uploads/2021/05/misal-pav-2021.jpg' },
    { id: 3, foodName: 'Bamboo shoots fry',Cuisine:'Cuisine : Assam' ,imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKItkJn9cYWUWsUxAgsOs7XB6jCk3eFzpLQ&usqp=CAU' },
    { id: 4, foodName: 'Veg Thali',Cuisine:'Cuisine : Tamil Nadu' ,imageUrl: 'https://media.istockphoto.com/id/483405040/photo/south-indian-meals-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=WUFvAWQgxT44QW1JHS5c_QiB_RDf2hkR2hf4Kpk_lzA=' },
    { id: 5, foodName: 'Kodi Pulao',Cuisine:'Cuisine : Andhra Pradesh ' ,imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/5/19439485/6a73ae991b5996015c9bc3153ddef084.jpg?fit=around|960:500&crop=960:500;*,*' },
    { id: 6, foodName: 'Hyderabadi Biryani',Cuisine:'Cuisine : Telangana' ,imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwG6hELXSeWHEQzcoeDGmWz0Z1v0Z_HdLkQ&usqp=CAU' },
    { id: 7, foodName: 'Poha',Cuisine:'Cuisine : Madhya Pradesh ' ,imageUrl: 'https://www.theloveofspice.com/wp-content/uploads/2019/01/kanda-poha-recipe.jpg' },
    { id: 8, foodName: 'Bisi Bele Bath',Cuisine:'Cuisine : Karnataka' ,imageUrl: 'https://maayeka.com/wp-content/uploads/2019/12/bisi-bele-bhath.jpg' },
    { id: 9, foodName: 'Makke di Roti and Sarso da Saag',Cuisine:'Cuisine : Punjab' ,imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBvlDO8zSlhkoVqeASRvFt-lEXl3WqQxDwg&usqp=CAU' }
  ];

  const fastFoods = [
    { id: 10, Restaurant: "Pizza Hut",imageUrl: 'https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/pizza_hut_logo.png' },
    { id: 11, Restaurant: "KFC",imageUrl: 'https://b.zmtcdn.com/data/pictures/2/3700002/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|750:500&crop=750:500;*,*' },
    { id: 12, Restaurant: "Taco Bell",imageUrl: 'https://pbs.twimg.com/profile_images/1719239843887353856/tna25awf_400x400.jpg' },
    { id: 13, Restaurant: "Subway",imageUrl: 'https://www.allrecipes.com/thmb/Sb7Xjv5oJJuovAoZCg1IO4Bt3vg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-subway-4x3-6e1f8bb7150647bbbc16a0605a394b86.jpg' },
    { id: 14, Restaurant: "Domino’s Pizza",imageUrl: 'https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0' },
    { id: 15, Restaurant: "Burger King",imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png' },
    { id: 16, Restaurant: "McDonald’s",imageUrl: 'https://toxicfreefuture.org/wp-content/uploads/2021/01/AdobeStock_279207035_Editorial_Use_Only-scaled.jpeg' },
    { id: 17, Restaurant: "Starbucks",imageUrl: 'https://lh3.googleusercontent.com/aM15blq-mRDV_fwCuXsHOC--r1WS1CCGQ2vO23Wa0qJq7t0vBx3axxwffFslUcoaWm3TLDvHY4b1MBGUybbtIgyrmNqe1CdxRR_9dfXo' },
  ];

  const KoreanFoods = [
    { id: 18, Restaurant: "Arirang Korean Restaurant",imageUrl: 'https://nomadparadise.com/wp-content/uploads/2022/01/korean-street-food-04-1024x683.jpg.webp' },
    { id: 19, Restaurant: "Tteokbokki - Soora Sang",imageUrl: 'https://allwaysdelicious.com/wp-content/uploads/2012/12/onigiri-vert-1.jpg' },
    { id: 20, Restaurant: "The Himalayan",imageUrl: 'https://www.shape.com/thmb/ivPIF4hRZ0h-lgy6F_ig8OHzefo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/700_RU281553-54d76afc6a394fc88fabadf8acb7044e.jpg' },
    { id: 21, Restaurant: "Hi Seoul Restaurant",imageUrl: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/bulgogi.jpg?quality=82&strip=1' },
    { id: 22, Restaurant: "LachiMolala Korean Street",imageUrl: 'https://www.chefspencil.com/wp-content/uploads/Gamja-Hotdog.jpg' }
  ];


  const FoodCard = ({ data, index }) => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className={`card-container ${clickedCard === index ? 'enlarged-card' : ''}`}
          onClick={() => handleOnClick(index)}
        >
          <CardMedia
            component="img"
            height="240"
            image={data.imageUrl}
            alt={data.foodName || data.Restaurant}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
              <h3>{data.foodName || data.Restaurant}</h3>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div className='food-page-content-container' style={{ paddingLeft: '50px' }}>
      
      <h1>Fast Foods Restaurants</h1>
      <Grid container spacing={3}>
        {fastFoods.map((fast, index) => (
          <FoodCard key={index + foodItems.length} data={fast} index={index + foodItems.length} />
        ))}
      </Grid>
      
    </div>
  );
};

export default Restaurants;
