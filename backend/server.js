import app from "./app.js";
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
