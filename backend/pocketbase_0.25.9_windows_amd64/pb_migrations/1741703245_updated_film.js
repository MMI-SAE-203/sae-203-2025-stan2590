/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("text58616428")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4042354073",
    "hidden": false,
    "id": "relation58616428",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invites",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text58616428",
    "max": 0,
    "min": 0,
    "name": "invites",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation58616428")

  return app.save(collection)
})
