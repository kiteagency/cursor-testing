import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";

initializeApp();

export const hello = onRequest((request, response) => {
  response.json({ message: "Hello from Firebase Gen-2!" });
});
