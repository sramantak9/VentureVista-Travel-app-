const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require('../models/listing.js');
const{isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingContoller = require("../controller/listing.js");


router.route("/")
//index
.get(wrapAsync(listingContoller.index))
//create
.post(isLoggedIn, validateListing, wrapAsync(listingContoller.createListing));


//new route
router.get("/new", isLoggedIn, listingContoller.renderNewForm);

router.route("/:id")
//show
.get(wrapAsync(listingContoller.showListing))
//update
.put(isLoggedIn, isOwner, validateListing, wrapAsync(listingContoller.updateListing))
//delete
.delete(isLoggedIn, isOwner, wrapAsync(listingContoller.destroyListing));

// edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingContoller.renderEditForm));

module.exports = router;