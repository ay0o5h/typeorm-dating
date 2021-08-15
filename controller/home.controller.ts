import { Request, Response } from "express";
import { Passion} from '../src/entity/passion';
import {Passion_user} from '../src/entity/Passion_user'
import {User} from '../src/entity/User'
import { errRes, getOtp, okRes } from "../utility/util.service";
import * as validate from "validate.js";
import Validator from "../utility/validation";
export default class HomeController {
  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static async getAll(req: Request, res: Response): Promise<object> {
    const users = await Passion.find();

    return res.json(users);
  }

  /**
   *
   * @param req
   * @param res
   * @returns
   */
  static async addPassion(req: Request, res: Response): Promise<object> {
       // get the body
    const body = req.body;
    let user;
    let notValid = validate(body, Validator.passion());
    if (notValid) return errRes(res, notValid);
    try {
      user = await Passion.create({
        title: body.title,
      });

      await user.save();
    } catch (error) {
      return errRes(res,"somthing went wrong");
    }
    return okRes(res,user);
  }
  static async addOtherInformation(req, res): Promise<object> {
    // get the body
 const body = req.body;
 let notValid = validate(body, Validator.otherInformation());
 if (notValid) return errRes(res, notValid);
 if (body.userPassions.length < 1) return errRes(res, "you should chose your passions");

 let passions = [];
 for (const passion of body.userPassions) {
   let notValid = validate(passion, Validator.singlePassion());
   if (notValid) return errRes(res, notValid);

}
let passion_user = await Passion_user.create({
    user: req.user.id,
    
  });

  await passion_user.save();
  }
}