import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Error format email').isEmail(),
    body('password', 'Password min 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Type correct Name').isLength({ min: 3 }),
    body('avatarUrl', 'Error url for avatar').optional().isURL(),
];

