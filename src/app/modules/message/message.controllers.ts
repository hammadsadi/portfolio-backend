import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MessageServices } from "./message.services";

/**
 *@Method POST
 * @Description Message Send
 * @Return Data
 */
const createMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.createMessageToDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Message Send successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description GET All Message From DB
 * @Return Data
 */
const getAllMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.getAllMessageFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Message Retrieved successfully",
    data: result,
  });
});

/**
 *@Method GET
 * @Description GET Single Message From DB
 * @Return Data
 */
const getSingleMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.getSingleMessageFromDB(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Message Retrieved successfully",
    data: result,
  });
});

/**
 *@Method DELETE
 * @Description DELETE Single Message From DB
 * @Return Data
 */
const deleteSingleMessage = catchAsync(async (req, res) => {
  const result = await MessageServices.deleteMessageFromDB(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Message Deleted successfully",
    data: result,
  });
});

export const MessageControllers = {
  createMessage,
  getAllMessage,
  getSingleMessage,
  deleteSingleMessage,
};
