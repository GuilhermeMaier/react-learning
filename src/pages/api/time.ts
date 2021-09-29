import moment from "moment";

function Time(request, response) {
  const dynamicDate = moment();
  const node = process.env.ENVIRONMENT;

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.json({
    dynamicDate,
    node,
  });
}

export default Time;
