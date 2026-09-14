const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <html>
            <head>
                <title>Student Record</title>
            </head>
            <body>
                <h1>Welcome to Student Record System</h1>

                <form method="POST" action="/add-student">

                    <label>Student Name:</label>
                    <input type="text" name="name" required>
                    <br><br>

                    <label>Roll Number:</label>
                    <input type="text" name="roll" required>
                    <br><br>

                    <label>Course:</label>
                    <input type="text" name="course" required>
                    <br><br>

                    <label>Email:</label>
                    <input type="email" name="email" required>
                    <br><br>

                    <button type="submit">Add Student</button>

                </form>

                <br>
                <a href="/students">View Students</a>
            </body>
            </html>
        `);
    }

    else if (req.url === "/add-student" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const data = new URLSearchParams(body);

            const student = {
                name: data.get("name"),
                roll: data.get("roll"),
                course: data.get("course"),
                email: data.get("email")
            };

            fs.readFile("students.json", "utf8", (err, fileData) => {

                let students = [];

                if (!err && fileData) {
                    students = JSON.parse(fileData);
                }

                students.push(student);

                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),
                    err => {

                        if (err) {
                            res.writeHead(500, {
                                "Content-Type": "text/plain"
                            });
                            res.end("Error saving student");
                            return;
                        }

                        res.writeHead(200, {
                            "Content-Type": "text/html"
                        });

                        res.end(`
                            <h1>Student Added Successfully!</h1>
                            <a href="/">Add Another Student</a>
                            <br><br>
                            <a href="/students">View Students</a>
                        `);
                    }
                );
            });
        });
    }

    else if (req.url === "/students" && req.method === "GET") {

        fs.readFile("students.json", "utf8", (err, data) => {

            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });
                res.end("Error reading student records");
                return;
            }

            const students = JSON.parse(data);

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            let html = `
                <h1>Student Records</h1>
                <table border="1" cellpadding="10">
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Course</th>
                        <th>Email</th>
                    </tr>
            `;

            students.forEach(student => {
                html += `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.roll}</td>
                        <td>${student.course}</td>
                        <td>${student.email}</td>
                    </tr>
                `;
            });

            html += `
                </table>
                <br>
                <a href="/">Back to Form</a>
            `;

            res.end(html);
        });
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});