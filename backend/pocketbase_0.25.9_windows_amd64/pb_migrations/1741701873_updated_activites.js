/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // remove field
  collection.fields.removeById("text2975041875")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4042354073",
    "hidden": false,
    "id": "relation2975041875",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invites_activites",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2975041875",
    "max": 0,
    "min": 0,
    "name": "invites_activites",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation2975041875")

  return app.save(collection)
})
