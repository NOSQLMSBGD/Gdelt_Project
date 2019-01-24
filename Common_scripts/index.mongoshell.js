db.Requete1.createIndex( { Jour: -1, CodePays: 1, Langue: 1 } )

db.Requete2.createIndex( { actor: 1 })

//old// db.Requete3b.createIndex( { Mois: -1, CountryCode: 1, Langue: 1 })
//old// db.Requete4.createIndex( {Actor: 1 })

//conflit sur country...// db.Requete32.createIndex( { Mois: -1, CountryCode: 1, Langue: 1 })
db.Requete32.createIndex( { Mois: -1, Langue: 1 })

db.Requete42.createIndex( { stat1 : 1 })
db.Requete42.createIndex( { stat2 : 1 })

db.Requete5bis.createIndex( { ActorCode1: 1, ActorCode2: 1 })

