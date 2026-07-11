import {model,Schema} from "mongoose"

const reactionScheme=new Scheme({
    userid:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    postid:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    },
    type:{
        enum:[
            "love",//❤️
            "laugh",//😂
            "relate",//🤝
            "hug",//🫂
            "brave",//🫡
            "mindblow",//🤯
        ]
    }
})

export const Reaction=model("Reaction",reactionScheme)