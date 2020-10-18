const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
    //insert
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        whatsapp: "98989898888",
        about: "Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha quando sentir vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    });

    //select
    const selectedOrphanages = await db.all("SELECT * FROM orphanages;");
    console.log(selectedOrphanages);

    // select by id
    const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '2'");
    console.log(orphanage);

    // delete
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"));
});