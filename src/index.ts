import { app } from './server';

const port = 7001;

app.get('/test', (req, res) => {
    res.json({ result: 'success' });
});

async function main() {
    app.listen(port, () => {
        console.log(`listining on port ${port}`);
    });
}

main().catch((e) => console.log(e));
