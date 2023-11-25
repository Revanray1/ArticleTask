import express from "express";
import bodyParser from "body-parser";
import articleRoutes from "./routes/articleRoutes";
import commentRoutes from "./routes/commentRoutes";

const app = express();

app.use(bodyParser.json());

app.use("/articles", articleRoutes);
app.use("/comments", commentRoutes);

const port = 4000;

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;