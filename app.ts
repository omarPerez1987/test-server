import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});