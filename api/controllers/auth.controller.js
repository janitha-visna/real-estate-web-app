import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // Create a new user and save to DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);

    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create a user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //check if the user exists

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(404).json({ message: "invalid credentials" });

    // check if the password is correct

    const isPasswordVaild = await bcrypt.compare(password, user.password);

    if (!isPasswordVaild)
      return res.status(401).json({ message: "invalid credntials" });

    //generate cookie token and send to the user

    //res.setHeader("set-Cookie", "test=" + "myValue").json("sucess");

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin:false,
      },
      process.env.JWT_SECRECT_KEY,
      { expiresIn: age }
    );

    const { password:userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        //secure:true
        maxAge: age,
      })
      .status(200)
      .json(userInfo);

    res.cookie;
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "logout succesful" });
};
