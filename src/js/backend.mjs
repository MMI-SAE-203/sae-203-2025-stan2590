

import PocketBase from 'pocketbase';
const pb = new PocketBase(' http://127.0.0.1:8090');

export async function datefilm() {
    const records = await pb.collection('film').getFullList({sort: 'date'});
    return records;
}

export async function dateactivites() {
    const records = await pb.collection('activites').getFullList({ sort: 'date_activites' });
    return records;
}

export async function listeinvites() {
    const records = await pb.collection('invites').getFullList({ sort: 'nom' });
    return records;
}

export async function oneID(id) {
    const oneRecord = await pb.collection('film').getOne(id);
    return oneRecord;
}

export async function oneIDActivites(id) {
    const oneRecord = await pb.collection('activites').getOne(id);
    return oneRecord;
}

export async function oneIDInvites(id) {
    const oneRecord = await pb.collection('invites').getOne(id);
    return oneRecord;
}

export async function allActiviteByInvites(id) {
    return await pb.collection('activites').getFullList({
        filter: `invites_activites = '${id}'`,
        expand: 'invites_activites',
    });
}

export async function allActiviteByName(nom) {
    return await pb.collection('activites').getFullList({
        filter: `invites_activites = '${nom}'`,
        expand: 'invites_activites',
    });
}

export async function addNewFilm(newFilm) {
    return await pb.collection('film').create(newFilm);
}

export async function addNewInvite(newInvite) {
    return await pb.collection('invites').create(newInvite);
}

export async function addNewActivite(newActivite) {
    return await pb.collection('activites').create(newActivite);
}


export async function updateFilmById(id, data) {
    return await pb.collection('film').update(id, data);
}

export async function updateInviteById(id, data) {
    return await pb.collection('invites').update(id, data);
}

export async function updateActiviteById(id, data) {
    return await pb.collection('activites').update(id, data);
}

