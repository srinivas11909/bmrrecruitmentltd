
import { withSessionRoute } from "../../lib/session";
import bcrypt from "bcrypt";

export default withSessionRoute(async function loginRoute(req, res) {
  const { username, password } = req.body;

  // Replace this with your user lookup logic
  const user = { username: "admin", passwordHash: "$2b$10$somethinghashed" };

  if (user && await bcrypt.compare(password, user.passwordHash)) {
    req.session.user = { username: user.username };
    await req.session.save();
    res.send({ ok: true });
  } else {
    res.status(401).send({ ok: false });
  }
});
