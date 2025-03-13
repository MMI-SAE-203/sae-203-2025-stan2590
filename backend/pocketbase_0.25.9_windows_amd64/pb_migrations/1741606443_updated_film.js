/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1200832254",
    "max": 0,
    "min": 0,
    "name": "realisateur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file3828436749",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "affiche",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url4182342110",
    "name": "bande_annonce",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("text1843675174")

  // remove field
  collection.fields.removeById("text1200832254")

  // remove field
  collection.fields.removeById("file3828436749")

  // remove field
  collection.fields.removeById("url4182342110")

  return app.save(collection)
})
