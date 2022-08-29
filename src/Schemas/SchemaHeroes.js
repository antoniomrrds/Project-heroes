const Joi = require('joi')

const  validateUser = hero =>
{
    const JoiSchema = Joi.object({
      
        name: Joi.string()
                  .min(4)
                  .required()
                  .messages({
                    'string.base': `Name should be a type of text`,
                    'string.min': 'Name has to be least {#limit} characters.',
                    'any.required': `Name is a required field`
                }),
                    
        superPowers: Joi.string()
        .min(4)
        .required()
        .messages({
            'string.base': `Super Powers should be a type of 'text'`,
            'string.min': 'Super Powers has to be least {#limit} characters.',
            'any.required': `Super Powers is a required field`
        })
          
                 
                         
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(hero)
}

module.exports = {validateUser}