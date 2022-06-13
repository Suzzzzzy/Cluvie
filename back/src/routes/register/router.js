import express from "express";
import User from "../../../models/user";
import { hashPassword } from "../../utils/hashPassword";

const registerRouter = express.Router();

// 회원가입
registerRouter.post("/users", async (req, res) => {
  try {
    const { email, password, nickname, birthday, sex } = req.body;
    const hashedPassword = hashPassword(password);
    const duplicate = await User.findOne({
      where: { email },
    });
    if (duplicate) {
      return res.status(403).send("중복된 이메일 입니다.");
    }

    const user = await User.create({
      email,
      password: hashedPassword,
      nickname,
      birthday,
      sex,
    });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
});

export default registerRouter;
