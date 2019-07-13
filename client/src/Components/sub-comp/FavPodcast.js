import React, { useState } from "react";
const unirest = require("unirest");

function FavPodcast() {
  const [search, setSearch] = useState("");
  const act = async () => {
    const response = await unirest
      .get("https://listen-api.listennotes.com/api/v2/genres")
      .header("X-ListenAPI-Key", "e42ba006e66848b88e1307e17d7a4541");
    console.log(response.toJSON());
    // const {
    //   body: { results }
    // } = response.toJSON();
    // console.log(results);

    return <div>Keih</div>;
  };
  return <div onClick={() => act()}>keith </div>;
}

export default FavPodcast;
