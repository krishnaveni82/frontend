// import * as React from "react"
// // import { Link } from "gatsby"
// // import { StaticImage } from "gatsby-plugin-image"

 
// import Seo from "../components/ui/seo"




// const ContactPage = () => (
// <Layout>
//     <p>Contact Page</p>
//   </Layout>
// )


// export default ContactPage

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/ui/layout';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'tan',
  },
}));

export default function DealCard() {
  const classes = useStyles();

  return (
    <Layout>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="deal" className={classes.avatar}>
            DF
          </Avatar>
        }
        title="Contact US"
        subheader="affiliate@dealsfavorite.com"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Email Contact only
        </Typography>
      </CardContent>
    </Card>
    </Layout>
  );
}


// react-multi-carousel ***************

// import React from "react"
// import Carousel from "react-multi-carousel"
// import "react-multi-carousel/lib/styles.css"

// const breakPoints = {
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//     slidesToSlide: 2,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 768 },
//     items: 3,
//     slidesToSlide: 3,
//   },
// }

// const products = [
//   {
//     image: "product-image.jpg",
//     title: "Product Title 1",
//     description: "Product Description 1",
//     price: "$55",
//   },
//   {
//     image: "product-image.jpg",
//     title: "Product Title 2",
//     description: "Product Description 2",
//     price: "$56",
//   },
//   {
//     image: "product-image.jpg",
//     title: "Product Title 3",
//     description: "Product Description 3",
//     price: "$56",
//   },
//   {
//     image: "product-image.jpg",
//     title: "Product Title 3",
//     description: "Product Description 3",
//     price: "$56",
//   },
//   {
//     image: "product-image.jpg",
//     title: "Product Title 3",
//     description: "Product Description 3",
//     price: "$56",
//   },
//   {
//     image: "product-image.jpg",
//     title: "Product Title 3",
//     description: "Product Description 3",
//     price: "$56",
//   },
//   {
//     image: "product-image.jpg",
//     title: "Product Title 3",
//     description: "Product Description 3",
//     price: "$56",
//   },
// ]

// const Card = ({ product }) => {
//   return (
//     <div className="card">
//       <img src={product.image} alt={product.title} />
//       <h2 className="title">{product.title}</h2>
//       <p className="description">{product.description}</p>
//       <b>{product.price}</b>
//     </div>
//   )
// }

// const ProductList = () => {
//   return (
//     <Carousel
//       swipeable={true}
//       draggable={true}
//       showDots={false}
//       responsive={breakPoints}
//       infinite={true}
//       autoPlay={true}
//       autoPlaySpeed={2000}
//       keyBoardControl={true}
//       customTransition="all .5"
//       transitionDuration={500}
//       containerClass="carousel-container"
//       removeArrowOnDeviceType={["tablet", "mobile"]}
//       dotListClass="custom-dot-list-style"
//       itemClass="carousel-item-padding-40-px"
//     >
//       {products.map((product) => (
//         <Card key={product.title} product={product} />
//       ))}
//     </Carousel>
//   )
// }

// export default ProductList
