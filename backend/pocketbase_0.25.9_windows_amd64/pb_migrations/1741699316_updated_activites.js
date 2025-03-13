/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // remove field
  collection.fields.removeById("select1460275054")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select1460275054",
    "maxSelect": 1,
    "name": "invites_activites",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Claire dupuis",
      "gauthier pierre",
      "mercier isabelle",
      "Rousseau léonard",
      "moreau sophie",
      "durand alexandre"
    ]
  }))

  // remove field
  collection.fields.removeById("text2975041875")

  return app.save(collection)
})
