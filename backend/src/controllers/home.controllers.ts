import { Response, Request } from "express";

// @desc   get welcome message
// @route  GET /
// @access Private
export const getWelcomeMessage = async (req: Request, res: Response) => {
	return res.status(234).send("Welcome to Song-mern");
};
