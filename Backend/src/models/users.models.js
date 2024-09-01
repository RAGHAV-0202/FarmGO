import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Products from "./Products.models.js";
import dotenv from "dotenv";
dotenv.config();

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "First name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already in use"]
    },
    phoneNumber: {
        type: String,
        // unique: [true, "Phone number already in use"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
    },
    address: [
        {
            fullName: { type: String, required: [true, "All fields are required"] },
            phone: { type: String, required: [true, "All fields are required"] },
            streetAddress: { type: String, required: [true, "All fields are required"] },
            city: { type: String, required: [true, "All fields are required"] },
            state: { type: String, required: [true, "All fields are required"] },
            postalCode: { type: String, required: [true, "All fields are required"] },
            country: { type: String, required: [true, "All fields are required"] },
        }
    ],
    cart: [
        {
            productId: {
                type: String,
                required: [true, "Product ID is required"]
            },
            quantity: {
                type: Number,
                default: 1,
            },
            cartValue: {
                type: Number
            },
            title: {
                type: String
            },
            image: {
                type: String
            },
            price: {
                type: Number
            }
        },
    ],
    orders: [
        {
            orderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
            },
            status: {
                type: String,
                enum: ["Placed", "Processing", "Confirmed", "Shipped", "Out for Delivery", "Delivered", "Cancelled", "Refunded", "Returned", "Completed"],
            }
        },
    ],
    refreshToken: {
        type: String
    },
    resetToken: {
        type: String
    },
    profilePicture: {
        type: String,
        default: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    },
    dob: {
        type: String,
        default: "01/01/2001"
    },
    totalCartValue: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

// Consolidated pre-save hook
UserSchema.pre("save", async function (next) {
    // Hash the password if it is modified
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    // Update the cart values if the cart is modified
    if (this.isModified("cart")) {
        let totalCartValue = 0;
        const cartUpdates = this.cart.map(async item => {
            const product = await Products.findById(item.productId).exec();
            if (product) {
                const itemCartValue = product.numericPrice * item.quantity;
                totalCartValue += itemCartValue;

                return {
                    ...item.toObject(),
                    cartValue: itemCartValue
                };
            }
            return item;
        });

        this.cart = await Promise.all(cartUpdates);
        this.totalCartValue = totalCartValue;
    }

    next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { _id: this._id, email: this.email, fullName: this.fullName },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

const User = mongoose.model("User", UserSchema);
export default User;
