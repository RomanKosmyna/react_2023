import Joi from "joi";

const animalValidator = Joi.object({
    cat: Joi.string().regex(/^[a-zA-Z]{1,20}$/).required()
});

export {animalValidator};