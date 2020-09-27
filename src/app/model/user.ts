export class user {
    _id?:{
        type : String;
    }
    fullname : {
        type : String;
        required: true;
    }
    username: {
        type: String,
        required: true
    }
    password : {
        type : String;
        required: true;
    }
    location : {
        type: String;
        required : true;
    }
    createdOn : {
        type : String;
    }
    lastLogin :{
        type : String;

    }
}
