import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
    res.send( "API working Fine" );
});
app.listen( PORT, () => {
    console.log( `Server is running on port ${PORT}` );
} );