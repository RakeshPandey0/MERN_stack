const Product = require("../model/Product");

const createProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    image: req?.file?.filename,
    price: req.body.price,
    description: req.body.description,
    user: req.authUser.id,
    featured: req.body.featured,
  });
  res.json({
    message: "Product created succesfully.",
  });
};

const getProducts = async (req, res) => {
  // page = 1, limit= 5 => skip(0),
  // page =2, skiep(5) => 2-1 * 5 = 5
  // page = 3, skiep(10) 3 - 1 * 5 = 10
  // page  4 , skeip (15), 4 -1 * 5 = 15

  const { page, limit, order } = req.query;
  const sort = {};
  if (order) {
    sort.price = order;
  }

  const products = await Product.find()
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(limit);
  const total = await Product.countDocuments();
  res.json({
    data: products,
    total,
  });
};

const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find({ featured: true }).limit(4);
  res.json({
    data: featuredProducts,
  });
};

const getLatestProducts = async (req, res) => {
  const latestProducts = await Product.find()
    .sort({ createdAt: "desc" })
    .limit(4);
  res.json({
    data: latestProducts,
  });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.json({
    message: "Product deleted succesfully.",
  });
};

const updateProduct = async (req, res) => {
  await Product.updateOne({ _id: req.params.id }, req.body);
  res.json({
    message: "Product updated succesfully.",
  });
};

const getProduct = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.json({
    data: product,
  });
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getLatestProducts,
  getFeaturedProducts,
  getProduct,
};
// localhost:3000/api/products
