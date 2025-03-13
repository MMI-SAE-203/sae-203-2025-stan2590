import { datefilm, dateactivites, listeinvites, oneID, oneIDActivites, oneIDInvites, allActiviteByInvites, allActiviteByName, addNewFilm, addNewInvite, addNewActivite, updateFilmById, updateInviteById, updateActiviteById } from '../';


try {
  const records = await datefilm();
  console.log(records);
} catch (e) {
  console.error(e);
}

try {
  const records = await dateactivites();
  console.log(records);
} catch (e) {
  console.error(e);
}

try {
  const records = await listeinvites();
  console.log(records);
} catch (e) {
  console.error(e);
}

try {
  const Onerecord = await oneID('ns4p02b8pkjb158');
  console.log(Onerecord);
} catch (e) {
  console.error(e);
}

try {
  const Onerecord = await oneIDActivites('wde45qniy8ff47f');
  console.log(Onerecord);
} catch (e) {
  console.error(e);
}

try {
  const Onerecord = await oneIDInvites('40hs26740jo0n88');
  console.log(Onerecord);
} catch (e) {
  console.error(e);
}

try {
  const records = await allActiviteByInvites('x2ekd42mr7779x7');
  console.table(records);
} catch (e) {
  console.error(e);
  
}

try {
  const records = await allActiviteByName('rencontre');
  console.log(records);
} catch (e) {
  console.error(e);

}

try {
  const newFilm = {
      "date": "test",
      "genre": "aventure",
      "realisateur": "test",
      "description": "test" ,
      "bande_annonce": "test", 
      "titre": "la course du siecle",
      "invites": {
          "id": "40hs26740jo0n88"
      }
  };

  await addNewFilm(newFilm);
} catch (e) {
  console.error(e);
}


try {
  const newInvite = {
      "nom": "test",
      "prenom": "test",
      "role": "acteur",
      "email": "test@test.com",
      "biographie": "test"
  };

  await addNewInvite(newInvite);

} catch (e) {
  console.error(e);
}

try {
  const newActivite = {
      "type": "rencontre",
      "date": "test",
      "lieu": "test",
      "description": "test",
    
  };

  await addNewActivite(newActivite);

} catch (e) {
  console.error(e);
}

try {
  const data = {
      "titre": "update",
      "description": "update",
      "genre": "update",
      "email": "upddate-test@gmail.com",
      "realisateur": "update",

  };

  await updateFilmById('ns4p02b8pkjb158', data);
} catch (e) {
  console.error(e);
}


try {
  const data = {
      "nom": "update",
      "prenom": "update",
      "role": "update",
      "email": "upddate-test@gmail.com",
      "biographie": "update",
      
  };

  await updateInviteById('lbqaikm8hak4240', data);
} catch (e) {
  console.error(e);
}

try {
  const data = {
      "type": "update",
      "date_activites": "update",
      "description": "update",
     

  };

  await updateActiviteById('x2ekd42mr7779x7', data);
} catch (e) {
  console.error(e);
}
