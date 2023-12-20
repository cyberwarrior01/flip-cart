import { User } from "../Models/userSchema.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  try {
    // console.log(req.body );
    const { Firstname, Lastname, Username, Email, Password, Phone } = req.body;
    

    if (Firstname && Lastname && Username && Email && Password && Phone) {
      const ExistingUser = await User.findOne({
        $or: [{ Email }, { Phone }, { Username }],
      });
      if (ExistingUser) {
        res.status(401).json({message: "user is already registered "})
        
      } else {
        try {
          const hashedPassword = await bcrypt.hash(Password, 10);
          const NewUser = await User.create({
            Firstname,
            Lastname,
            Username,
            Email,
            Password: hashedPassword,
            Phone,
          });
          res.status(201).json({ message: "User created sucessfull", NewUser });
        } catch (error) {
          res
            .status(204)
            .json({ message: "Error while hasshing the password", error });
        }
      }
    } else {
      res.status(205).json({ message: "All tehe fields are required" });
    }
  } catch (error) {
    res.status(500).json({message: 'Server error !' , error})
  }
};

export default createUser;
