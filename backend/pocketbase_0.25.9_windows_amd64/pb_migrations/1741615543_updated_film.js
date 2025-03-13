/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2278357108",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2278357108",
    "max": "",
    "min": "",
    "name": "annee_de_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
