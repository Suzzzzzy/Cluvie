import Users from "../../../models/user";
import { hashPassword } from "../../utils/hashPassword";
import { makeToken } from "../../utils/makeToken";
import dotenv from "dotenv";
dotenv.config();

class userService {
  static login = async ({ email, password }) => {
    let user = await Users.findOne({
      where: { email },
    });
    const hashedPassword = hashPassword(password);
    if (!user) {
      // 가입여부 확인
      const errorMessage = "해당 아이디로 가입된 사용자가 없습니다.";
      return { errorMessage };
    } else if (user.password === hashedPassword) {
      // 비밀번호 일치 확인
      const token = makeToken({ userId: user.id });

      user = {
        ...user,
        accessToken: token,
      };
      return user;
    } else {
      const errorMessage = "비밀번호가 틀립니다.";
      return { errorMessage };
    }
  };
  static userDataUpdate = async ({ id, nickname, description }) => {
    const user = await Users.findOne({
      where: { id },
    });
    if (!user) {
      const errorMessage = "해당 사용자가 없습니다.";
      return { errorMessage };
    } else {
      const updated = await Users.update(
        { nickname, description },
        { where: { id } }
      );
      return updated;
    }
  };
}

export { userService };
