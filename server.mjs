import express from "express";
import path from "path";
import cors from "cors";
import "dotenv/config";
const app = express();

app.use(cors("*"));

app.use(express.json());

app.post("/wrike", (req, res) => {
  console.log(req.body);
  res.status(200).send("good");
});

app.use(express.static(path.join("./", "public")));

app.listen(5501, () => {
  console.log("running server");
});

app.listen();

// const client_id = process.env.VITE_client_id;
// const redirect_uri = process.env.VITE_redirect_uri;
// const graphScope = ["https://graph.microsoft.com/.default", "offline_access"];
// const wrikeScope = ["Default"];
// const salesSiteID = process.env.VITE_salesSiteID;
// const customerListID = process.env.VITE_customerListID;
// const rfqListID = process.env.VITE_rfqListID;
// const wrikeSalesSpaceID = process.env.VITE_wrikeSalesSpaceID;
// const tenantID = process.env.VITE_tenantID;
// const clientID = process.env.VITE_clientID;
// const graphRedirectURI = process.env.VITE_graphRedirectURI;
