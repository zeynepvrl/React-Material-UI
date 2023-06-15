import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const LessonCard = () => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        height="150"
        component="img"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Başlık
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          distinctio error voluptatum sapiente magnam explicabo dolorem
          voluptatibus delectus! Ab dolorem, illo deleniti ut suscipit eos
          labore beatae alias voluptate nesciunt?
        </Typography>
        <CardActions>
            <Button variant="contained" color="error">Temizle</Button>
            <Button variant="contained">Kaydet</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
