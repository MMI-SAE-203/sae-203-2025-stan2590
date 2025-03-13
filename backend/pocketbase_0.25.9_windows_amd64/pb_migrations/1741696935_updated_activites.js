/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select1460275054",
    "maxSelect": 1,
    "name": "invites_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Claire dupuis"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select1460275054",
    "maxSelect": 1,
    "name": "invites_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "hh"
    ]
  }))

  return app.save(collection)
})
