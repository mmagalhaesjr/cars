import joi from "joi";
export var carSchema = joi.object({
    model: joi.string().required(),
    licensePlate: joi.string().length(7).required(),
    year: joi.number().required(),
    color: joi.string().required()
});
