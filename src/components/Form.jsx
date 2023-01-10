import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// Options
const options = [
  {
    label: "Manufacturing",
    value: "Manufacturing",
    
  },
  {
    label: "Construction materials",
    value: "Construction materials",
  },
  {
    label: "Electronics and Optics",
    value: "Electronics and Optics",
  },
  {
    label: "Bakery",
    value: "Beverages",
  },
  {
    label: "Meat & meat",
    value: "Meat & meat",
  },
  {
    label: "Milk and dairy products",
    value: "Food and Beverage",
  },
  {
    label: "Other",
    value: "Other",
  },
  {
    label: "Sweets",
    value: "Sweets",
  },
  {
    label: "Bathroom/sauna ",
    value: "Bedroom",
  },
  {
    label: "Children’s room ",
    value: "Children’s room",
  },
  {
    label: "Living room ",
    value: "Living room ",
  },
  {
    label: "Office",
    value: "Office",
  },
  {
    label: "Other (Furniture)",
    value: "Other (Furniture)",
  },
  {
    label: "Project furniture",
    value: "Project furniture",
  },
  {
    label: "Machinery",
    value: "Machinery",
  },
  {
    label: "Manufacture of machinery ",
    value: "Manufacture of machinery ",
  },
  {
    label: "Maritime",
    value: "Maritime",
  },
  {
    label: "Forgings, Fasteners",
    value: "Forgings, Fasteners",
  },
  {
    label: "Gas, Plasma, Laser",
    value: "Gas, Plasma, Laser",
  },
  {
    label: "MIG, TIG, Aluminum welding",
    value: "MIG, TIG, Aluminum welding",
  },
  {
    label: "Plastic and Rubber",
    value: "Plastic and Rubber",
  },
  {
    label: "Packaging",
    value: "Packaging",
  },
  {
    label: "Plastic goods",
    value: "Plastic goods",
  },
  {
    label: "Plastic processing technology",
    value: "Plastic processing technology",
  },
  {
    label: "Blowing",
    value: "Blowing",
  },
  {
    label: "Moulding",
    value: "Plastics welding and processing",
  },
  {
    label: "Plastic profiles",
    value: "Plastic profiles",
  },
  {
    label: "Printing",
    value: "Printing",
  },
  {
    label: "Advertising",
    value: "Advertising",
  },
  {
    label: "Book/Periodicals printing",
    value: "Book/Periodicals printing",
  },
  {
    label: "Labelling and packaging printing",
    value: "Labelling and packaging printing",
  },
  {
    label: "Textile and Clothing",
    value: "Textile and Clothing",
  },
  {
    label: "Clothing",
    value: "Clothing",
  },
  {
    label: "Textile",
    value: "Textile",
  },
  {
    label: "Wood",
    value: "Wood",
  },
  {
    label: "Other (Wood)",
    value: "Other (Wood)",
  },
  {
    label: "Wooden houses",
    value: "Wooden houses",
  },
  {
    label: "Creative industries",
    value: "Creative industries",
  },
  {
    label: "Energy technology",
    value: "Energy technology",
  },
  {
    label: "Environment",
    value: "Environment",
  },
  {
    label: "Service",
    value: "Service",
  },
  {
    label: "Business services",
    value: "Business services ",
  },
  {
    label: "Engineering",
    value: "Engineering",
  },
  {
    label: "Energy technology",
    value: "Energy technology",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Form() {
  const classes = useStyles();
  const [formData, updateFormData] = useState({});
  // Handle on Chnange

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  // Handling Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h6">
            Please enter your name and pick the Sectors you are currently
            involved in.
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="Name"
              autoComplete="name"
              autoFocus
              onChange={handleChange}
            />

            {/* 
            Options
             */}

            <select
              onChange={handleChange}
              name="Sectors"
              style={{
                height: "55px",
                width: "100%",
                border: "1px solid #c0c0c0",
                borderRadius: "4px",
                boxSizing: "border-box",
                padding: "16px",
              }}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <br />
            <FormControlLabel
            name="agree"
              control={<Checkbox value="true" color="primary" />}
              label=" Agree to terms"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
