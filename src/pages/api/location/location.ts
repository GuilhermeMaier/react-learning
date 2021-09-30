import axios from "axios";
import { locationViaCepBody, locationViaCepResponse } from "./dto/location.dto";

async function Location(request: locationViaCepBody, response) {
  const config = {
    url: `https://viacep.com.br/ws/95043070/json/`,
  };

  const locationData = await axios(config);

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  response.json(locationData);
}

export default Location;
