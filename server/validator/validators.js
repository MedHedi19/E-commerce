// const passwordValidator = require('password-validator');

// const passwordSchema = new passwordValidator();
// passwordSchema
//     .is().min(8).has().uppercase().has().lowercase().has().digits(1)
//     .has().symbols()
//     .is().not().oneOf(['Passw0rd', 'Password123', '123456', 'qwerty', 'abc123', 'letmein', 'admin', 'welcome', '1234', 'admin123',
//         'root', '12345', '123456789', 'test', 'password1', '123', '12345678', '123123', '123321', '111111', 'iloveyou',]);

// function verifyPassword(password) {
//     const validationResult = passwordSchema.validate(password, { list: true });

//     if (validationResult.length > 0) {
//         const messages = validationResult.map(error => {
//             switch (error) {
//                 case 'oneOf':
//                     return 'Password too weak.';
//                 case 'min':
//                     return 'Password must be at least 8 characters long.';
//                 case 'uppercase':
//                     return 'Password must contain at least one uppercase letter.';
//                 case 'lowercase':
//                     return 'Password must contain at least one lowercase letter.';
//                 case 'digits':
//                     return 'Password must contain at least one digit.';
//                 case 'symbols':
//                     return 'Password must contain at least one special character.';
//                 default:
//                     return 'Invalid password.';
//             }
//         });
//         return { valid: false, messages };
//     }
//     return { valid: true };
// }

// module.exports = { verifyPassword };
