import React from "react";
import { useSelector } from "react-redux";

//M-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import RestaurantCard from "./RestaurantCard";

const RestaurantContent = () => {
  const { restaurants, orders } = useSelector((state) => state.data);
  const restaurantArray = restaurants.restaurants;
  let sortedArray = [];
  if (restaurantArray) {
    sortedArray = restaurantArray.map(rest => {
      rest.occurance = orders.filter(o => o.seller.sellerId === rest._id).length;
      return rest
    })
    sortedArray.sort((a, b) => (a.occurance < b.occurance) ? 1 : ((b.occurance < a.occurance) ? -1 : 0))
  }
  const getRestaurantCard = (restaurantObj) => {
    return (
      <Grid item xs={12} sm={3} key={restaurantObj._id}>
        <RestaurantCard {...restaurantObj} />
      </Grid>
    );
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h6"
        color="textPrimary"
        component="p"
        noWrap
      >
        Order from your favourite Eatery -
      </Typography>
      <br />
      <Grid container spacing={2}>
        {sortedArray ? (
          sortedArray.length > 0 ? (
            sortedArray.map((restaurant) => getRestaurantCard(restaurant))
          ) : (
            <p>
              No Restaurants currently available in your area, come back Later.
            </p>
          )
        ) : (
          <p>Server Error, come back Later.</p>
        )}
      </Grid>
    </>
  );
};

export default RestaurantContent;
