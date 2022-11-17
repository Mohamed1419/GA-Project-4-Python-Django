import tokenService from "./tokenService.js";
// const BASE_URL = "https://blogging-platform-365219.ew.r.appspot.com";

export const getListings = async () => {
  try {
    let res = await fetch("/api/listings");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getListing = async (listingID) => {
  try {
    let res = await fetch(`/api/listings/${listingID}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUserListing = async (userID) => {
  try {
    let res = await fetch(`/api/users/${userID}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateAListing = async (listing) => {
  try {
    const token = tokenService.getToken();

    let res = await fetch(`/api/blogs/${listing._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(listing),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createAListing = async (listing) => {
  try {
    const token = tokenService.getToken();
    let res = await fetch(`/api/listings`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: listing,
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const removeAListing = async (listing) => {
  try {
    console.log("listing was deleted");
    const token = tokenService();
    let res = await fetch(`/api/listings/${listing._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(listing),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
