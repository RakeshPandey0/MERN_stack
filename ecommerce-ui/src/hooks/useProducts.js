import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getLatestProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/latest");
  return res.data.data;
};

const getFeaturedProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/featured");
  return res.data.data;
};

function useLatestProducts() {
  const { data: latestProducts, isLoading: isLoadingLatest } = useQuery({
    queryKey: ["latest-products"],
    queryFn: getLatestProduct,
  });
  return { latestProducts, isLoadingLatest };
}

function useFeaturedProducts() {
  const { data: featuredProducts, isLoading: isLoadingFeatured } = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProduct,
  });
  return { featuredProducts, isLoadingFeatured };
}

export { useLatestProducts, useFeaturedProducts };
