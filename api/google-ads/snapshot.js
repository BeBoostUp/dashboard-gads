import { handleApiRequest } from "../../server.mjs";

export const config = {
  maxDuration: 300
};

export default async function handler(request, response) {
  await handleApiRequest(request, response);
}
