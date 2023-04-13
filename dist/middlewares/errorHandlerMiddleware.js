import httpStatus from "http-status";
export default function handleErrorsMiddleware(err, req, res, next) {
    console.log(err);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
}
