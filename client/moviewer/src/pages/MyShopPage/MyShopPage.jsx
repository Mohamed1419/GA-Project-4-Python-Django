import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUserListing } from "../../utils/listingService";
import useUser from "../../hooks/UseUser";
import './MyShopPage.css'

function MyShopPage() {
    const { user } = useUser();
    const [userListings, setUserListings] = useState();
    const { userID } = useParams();
  
    let navigate = useNavigate();
  
    useEffect(() => {
      if (!userID) {
        return;
      }
      async function getUserListings() {
        const listing = await getUserListing(userID);
        if (userID !== listing.id) {
          navigate(`/`);
        }
        setUserListings(listing);
      }
      getUserListings();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userID]);
  
    return (
      <section className="user-blogs-list">
        {userListings ? (
          <div>
            
          </div>
        ) : (
          <p className="loading-msg">Loading, please wait.</p>
        )}
      </section>
    );
  
}

export default MyShopPage
