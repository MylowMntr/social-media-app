const mongoose = require("mongoose");
const { isEmail, contains } = require("validator");
const filter = require("../util/filter");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Au moins 5 caractères"],
      maxlength: [20, "Maximum 20 caractères"],
      validate: {
        validator: (val) => !contains(val, " "),
        message: "Ne peut pas contenir d'espace",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "Email invalide"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Au moins 8 caractères"],
    },
    biography: {
      type: String,
      default: "",
      maxLength: [200, "Maximum 200 caractères"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (filter.isProfane(this.username)) {
    throw new Error("Nom d'utilisateur non autorisé");
  }

  if (this.biography.length > 0) {
    this.biography = filter.clean(this.biography);
  }

  next();
});

module.exports = mongoose.model("user", UserSchema);
