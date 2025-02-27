import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`welcome to the subscription tracker api`);
});
app.listen(3000, () => {    
  console.log("Subscription tracker apai is running on http://localhost:3000");
} );

export default app;