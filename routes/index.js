import express from "express";
import slackRoutes from "./slack";
import rankingRoutes from "./ranking";
import interactionsRoutes from "./interactions";
import gameRoutes from "./game";
import botRoutes from "./bot";
import githubRoutes from "./github";
import disqusRoutes from "./disqus";
import resourcesRoutes from "./resources";
const router = express.Router();

router.use("/slack", slackRoutes);
router.use("/ranking", rankingRoutes);
router.use("/interactions", interactionsRoutes);
router.use("/game", gameRoutes);
router.use("/bot/commands", botRoutes);
router.use("/resources", resourcesRoutes);
router.use("/integrations/github", githubRoutes);
router.use("/integrations/disqus", disqusRoutes);

router.get("/", (req, res) => {
  res.render("index", {
    title: "Seja bem vindo! =D"
  });
});

export default router;
