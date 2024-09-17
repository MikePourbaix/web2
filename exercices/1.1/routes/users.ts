import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", (_req, res) => {
  res.json({ users: [{ name: "Mike Pourbaix" }] });
});

export default router;
