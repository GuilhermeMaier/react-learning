import moment from "moment";

function Time(request, response) {
  const dynamicDate = moment();
  const node = process.env.ENVIRONMENT;

  response.json({
    dynamicDate,
    node,
  });
}

export default Time;
