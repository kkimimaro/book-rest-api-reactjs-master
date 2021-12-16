import React from "react";
import { Card } from "react-bootstrap";

const Welcome = () => {

  return (
    <Card bg="dark" text="light">
      <Card.Header>Продажа книг, манги и комиксов</Card.Header>
      <Card.Body style={{ overflowY: "scroll", height: "770px" }}>
          <img
              src="https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg"
              height="650px"
              width="1080px"
          />
          <p></p>
      </Card.Body>
    </Card>
  );
};

export default Welcome;
