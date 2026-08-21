import fs from "fs/promises"
const filename="student.txt";
async function createFile() {
    try {
        await fs.writeFile(
            fileName,"Name:Priyanka\nEmail:abc@gmail.com,Btech,CSE"
        );
        console.log("file create..")
    }

    catch(error) {
        console.log("ERROR....");
        async function main() {
            await createFile();
            await readFile();
            await updateFile();
            // await deleteFile();
        }
        main();

    }
}