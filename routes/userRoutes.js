const express = require('express');

const router = express.Router();
const { createUser,loginUser, getUsers,logoutUser} = require('../controller/userController');
const {verifytoken} = require('../middleware/verifytoken');
// const {
//     addToCart,
//     getCart,
//     updateCart,
//     removeFromCart,
// } = require('../controller/shoppingCartController');


//const router = express.Router();


// 1.user routes
router.post('/users', createUser);
router.post('/users/login', loginUser);
router.get('/getUsers',verifytoken ,getUsers);
router.post('/logout', verifytoken, logoutUser);


// 2. product routes
const {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct,} = require('../controller/productmanagementController');
router.post('/createProduct',verifytoken, createProduct);
router.get('/getAllProducts', getAllProducts);
router.get('/getProductById/:id', getProductById);
router.put('/updateProduct/:id', verifytoken, updateProduct);
router.delete('/deleteProduct/:id', verifytoken, deleteProduct);

// 3. shopping routes
//3.shoppingCart Routes...........
const {addToCart,getCart,updateCart,removeFromCart} = require('../controller/shoppingCartController');

router.post('/addToCart',verifytoken, addToCart);
router.get('/getCart/:userId', getCart);
router.put('/updateCart/:productId',verifytoken, updateCart);
router.delete('/removeFromCart/:productId',verifytoken, removeFromCart);






//4.orderManagement Routes............
const {placeOrder,getAllOrders,getOrder} = require('../controller/ordermanagementContoller');
router.use((req, res, next) => {
  req.user = { id: 1 }; 
  next();
});

router.post('/placeOrder', placeOrder);
router.get('/getOrder/:id',getOrder);
router.get('/getAllOrders', verifytoken,getAllOrders);

module.exports = router;

