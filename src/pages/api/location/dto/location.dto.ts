import { createSwaggerSpec, withSwagger } from "next-swagger-doc";

export class locationViaCepBody {
  cep: string;
}

export class locationViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
