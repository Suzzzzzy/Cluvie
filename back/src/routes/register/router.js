import express from "express";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerRouter = express.Router();

// 회원가입
registerRouter.post("/users", async (req, res) => {
  try {
    const { email, password, nickname, age, sex } = req.body;

    const duplicate = await User.findOne({
      where: { email },
    });
    if (duplicate) {
      return res.status(403).send("중복된 이메일 입니다.");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      nickname,
      age,
      sex,
    });

    const token = jwt.sign(
      { user_id: user.id, email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;

    res.status(201).json({ success: true, user });
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
});

export default registerRouter;