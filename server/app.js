import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

const app = express();

app.use( cors() );
app.use( express.json() );
app.use( notFound );
app.use( errorHandler );
app.use( "/api/auth", authRoutes );


app.get( "/", ( req, res ) => {
    res.send( "API is running..." );
} );

export default app;