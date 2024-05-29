// pages/api/logout.js
import { withSessionRoute } from "../../lib/session";

export default withSessionRoute(async function logoutRoute(req, res) {
  req.session.destroy();
  res.send({ ok: true });
});
