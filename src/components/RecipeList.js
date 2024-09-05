/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  styled,
} from "@mui/material";
import React from "react";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              alt={recipe.recipe.label}
              image={recipe.recipe.image}
              component="img"
              sx={{ height: "220px" }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Calories: {Math.round(recipe.recipe.calories)} kcal
              </Typography>
              <Box sx={{ flex: 1 }}>
                {recipe.recipe.ingredientLines.map((ingredientLine, idx) => (
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    key={idx}
                  >
                    {ingredientLine}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default RecipesList;
