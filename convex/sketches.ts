import {mutation} from "./_generated/server"

export const saveSketch = mutation(({db}, {prompt}: {prompt: string}) => {
    console.log(prompt);
    // TODO: do some stuff 
    
    return{
        message: 'success',
    };
});