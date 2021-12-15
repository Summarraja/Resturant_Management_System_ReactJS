import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";

// import { useDispatch, useSelector } from "react-redux";

// import { getCart, fetchAddress } from "../redux/actions/dataActions";
// import Spinner from "../util/spinner/spinner";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
// import MyButton from "../util/MyButton";

// //custom-hook
// import useForm from "../hooks/forms";

// import CartItem from "../components/CartItem";

// const useStyles = makeStyles((theme) => ({
//   ...theme.spreadThis,
//   title: {
//     margin: "40px 0px 20px 128px",
//     display: "inline-block",
//     marginRight: "40%",
//   },
//   spaceTypo: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   address: {
//     "& > *": {
//       margin: theme.spacing(4),
//       width: "25ch",
//     },
//   },
//   checkoutButton: {
//     backgroundColor: "#1266f1",
//     color: "white",
//     marginBottom: 20,
//     "&:hover": {
//       backgroundColor: "#5a5c5a",
//     },
//     "&:disabled": {
//       color: "#bfbfbf",
//     },
//   },
// }));

const Payment = (props) => {
  return (
        <div style={{display:'flex', justifyContent:'space-around', margin:'50px'}}>
          <h1>Order Placed Successfully</h1>
        </div>
  );
};

export default Payment;
