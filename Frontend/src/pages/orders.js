import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import openSocket from "socket.io-client";

import { getOrders, socketStatusUpdate } from "../redux/actions/dataActions";
import OrderCard from "../components/OrderCard";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { CSVLink, CSVDownload } from "react-csv";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  para: {
    fontSize: "x-large",
    marginLeft: "32%",
  },
  title: {
    margin: "10px 0px 10px 130px",
    display: "inline-block",
    marginRight: "40%",
  },
}));

const Orders = (props) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.data);
  const {
    account: { role },
    _id,
  } = useSelector((state) => state.auth);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getOrders());
    const socket = openSocket(process.env.REACT_APP_SERVER_URL);
    socket.emit("add-user", { userId: _id });
    socket.on("orders", (data) => {
      if (data.action === "update") {
        dispatch(socketStatusUpdate(data.order));
      }
      if (data.action === "create") {
        dispatch(getOrders());
        dispatch(getOrders());
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Order History
      </Typography>
      <CSVLink
        data={orders.map((order, i) => {
          let obj = {
            "S.no": i + 1,
            "Restaurant": order.seller.name,
            "Buyer Name": order.user.name,
            "Buyer Email": order.user.email,
            "Buyer Phone": order.user.address.phoneNo,
            "Buyer Street": order.user.address.street,
            "Buyer Locality": order.user.address.locality,
            "Order Status": order.status,
            "Items": order.items.map(item => item.item.title).join(' , '),
            "Quantity": order.items.map(item => item.quantity).join(' , '),
            "Prices": "Rs: " + order.items.map(item => item.item.price).join(' , Rs: '),
            "Total Price": "Rs: " + order.items.map(item => item.item.price).reduce((partial_sum, a) => partial_sum + a, 0),
          };
          return obj
        })}
        filename={"Orders Report.csv"}
        >
        <Button
          variant="contained"
          color="default"
          className={classes.button}
        // startIcon={}
        >
          Generate Report
        </Button>
      </CSVLink>
      <br />
      <Grid item container direction="row">
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2}>
            {orders ? (
              orders.length > 0 ? (
                orders.map((order) => (
                  <Grid item xs={12} sm={4} key={order._id}>
                    <OrderCard order={order} role={role} />
                  </Grid>
                ))
              ) : (
                <p className={classes.para}>No Orders present.</p>
              )
            ) : null}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
    </>
  );
};

export default Orders;
