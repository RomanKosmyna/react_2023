import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Z]{1,20}$/).required().messages({'string.pattern.base': 'Use only letters.' +
            ' Between 1 to 20 allowed!'})
});

export {commentValidator};