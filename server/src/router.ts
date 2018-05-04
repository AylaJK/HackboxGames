import express from "express";
const router = express.Router();

router.get("/hello", (req: express.Request, res: express.Response) => res.send({ express: "Hello From the Server REST API" }));

export default router;
