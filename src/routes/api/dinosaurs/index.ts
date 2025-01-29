import { RequestHandler } from "@builder.io/qwik-city";
import data from "~/data/dinosaurs.json" with { type: "json" };

export const onGet: RequestHandler = async ({ json }) => {
  const _dinosaurs = await data;
  json(200, _dinosaurs);  
};
