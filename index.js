const express = require("express");
const app = express();

const http = require("http").Server(app);
const cors = require("cors");

const PORT = 4000;

const { users } = require("./lib/users");
const { listComments, createComment } = require("./lib/comments");

app.use(cors());
app.use(express.json());

const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("disconnect", () => {
        console.log("🔥: A user disconnected");
    });
});

app.post("/comments", async (req, res) => {
    const comment = createComment(req.body);
    io.emit("new-comment", { comment });
    res.json(comment);
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/comments", (req, res) => {
    const comments = listComments();
    res.json(comments);
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

