import NavBar from "../components/NavBar";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";
export default function SignIn() {
  return (
    <>
      <NavBar />
      <img src="/Banner.jpg" width={"100%"} height={"500px"} style={{padding:"3px 0px 3px 0px"}} />
      <FeaturedProducts />
      <LatestProducts />
    </>
  );
}
