import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Error format email').isEmail(),
    body('password', 'Password min 5 symbols').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Error format email').isEmail(),
    body('password', 'Password min 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Type correct Name').isLength({ min: 3 }),
    body('avatarUrl', 'Error url for avatar').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Enter article title').isLength({ min: 3 }).isString(),
    body('text', 'Enter the text of the article').isLength({ min: 10 }).isString(),
    body('tags', 'Invalid tag format (specify array)').optional().isString(),
    body('imageUrl', 'Invalid image link').optional().isString(),
];
