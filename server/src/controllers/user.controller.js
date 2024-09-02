import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PrismaClient } from '@prisma/client';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient()

const registerUser = [
    // Field validations
    body('mobileNumber').isMobilePhone().withMessage('Invalid mobile number').notEmpty(),
    body('name').isString().withMessage('Name must be a string').notEmpty(),
    body('email').isEmail().withMessage('Invalid email address').notEmpty(),
    body('state').isString().withMessage('State must be a string').notEmpty(),
    body('program').isString().withMessage('Program must be a string').notEmpty(),
    body('status').optional().isString().withMessage('Status must be a string'),

    asyncHandler(async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(new ApiResponse(400, null, errors.array()));
        }

        const { mobileNumber, name, email, state, program } = req.body;

        // Check if the user already exists by mobileNumber or email
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { mobileNumber },
                    { email }
                ]
            }
        });

        if (existingUser) {
            if (existingUser.mobileNumber === mobileNumber) {
                throw new ApiError(409, "User with this mobile number already exists");
            }
            if (existingUser.email === email) {
                throw new ApiError(409, "User with this email address already exists");
            }
        }

        // Create a new user
        const createdUser = await prisma.user.create({
            data: {
                mobileNumber,
                name,
                email,
                state,
                program,
            },
        });

        // Return a success response
        return res.status(201).json(
            new ApiResponse(201, createdUser, "User registered successfully")
        );
    })
];

const getAllUser = asyncHandler(async (req, res) => {
    try {
        const users = await prisma.user.findMany();

        return res.status(200).json(
            new ApiResponse(200, users, "Users fetched successfully")
        );
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json(
            new ApiResponse(500, null, "Error fetching users")
        );
    }
});

export {
    registerUser,
    getAllUser,
};
