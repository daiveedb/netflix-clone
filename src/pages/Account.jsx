import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full h-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/80 w-full h-[500px] fixed top-0 left-0"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">MY MOVIES</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
