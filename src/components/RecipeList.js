import styled from "styled-components";
import { Card, Typography, Grid, CardContent } from "@mui/material";

const RecipeCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecipeImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

const RecipeTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 8px;
`;

const RecipeIngredients = styled.div`
  margin-bottom: 16px;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe, index) => {
        const { label, image, calories, totalWeight } = recipe.recipe;
        const caloriesPer100g = totalWeight
          ? (calories / totalWeight) * 100
          : 0;

        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <RecipeCard>
              <RecipeImage src={image} alt={label} />
              <CardContent sx={{ flex: 1 }}>
                <RecipeTitle variant="h6">{label}</RecipeTitle>
                <RecipeIngredients>
                  {recipe.recipe.ingredientLines.map((ingredientLine, i) => (
                    <Typography key={i} variant="body2" color="textSecondary">
                      {ingredientLine}
                    </Typography>
                  ))}
                </RecipeIngredients>
                <Typography variant="body2" color="textSecondary">
                  Calories per 100g: {Math.round(caloriesPer100g)} kcal
                </Typography>
              </CardContent>
            </RecipeCard>
          </Grid>
        );
      })}
    </Grid>
  );
};
