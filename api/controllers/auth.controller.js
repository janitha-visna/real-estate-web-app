import bcrypt from "bcrypt";
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
  } catch (err) {
    console.log(first);
    res.status(500).json({ message: "failed to login" });
  }
};


export const logout = (req, res) => {};
