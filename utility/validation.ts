export default class Validate {
  constructor(parameters) {}

  static register = (must = true) => ({
    name: {
      presence: must,
      type: "string",
    },
    phone: {
      presence: must,
      type: "string",
    },
    password: {
      presence: must,
      type: "string",
    },
    age: {
      presence: must,
      type: "number",
    },
    city: {
      presence: must,
      type: "string",
    },
    gender: {
      presence: must,
      type: "string",
    },
   
  });

  static login = (must = true) => ({
    phone: {
      presence: must,
      type: "string",
    },
    password: {
      presence: must,
      type: "string",
    },
  });

  static forget = (must = true) => ({
    phone: {
      presence: must,
      type: "string",
    },
  });

  static verifyPassword = (must = true) => ({
    passwordOtp: {
      presence: must,
      type: "string",
    },
    newPassword: {
      presence: must,
      type: "string",
    },
  });
  static passion =(must=true) => ({
    title: {
      presence: must,
      type: "string",
    },
  })

  //user_ passions: [
    //     {
    //       user_id: 1,
    //       passion_id: 1,
    //     },
   //     {
    //       user_id: 1,
    //       passion_id: 2,
    //     },
    //   ],
  static otherInformation =(must=true) => ({
    image: {
      presence: must,
      type: "string",
    },
    bio: {
      presence: must,
      type: "string",
    },
    musicName: {
      presence: must,
      type: "string",
    },
    musicLink: {
      presence: must,
      type: "string",
    },
    userPassions: {
      presence: must,
      type: "array",
    },

  })
  static singlePassion  = (must = true) => ({
    userId: {
      presence: must,
      type: " number",
    },
    passionId: {
      presence: must,
      type: " number",
    },
    
  });
}