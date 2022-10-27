const movies = [
    {
        title: 'Se7en',
        year: 2001,
        personRoleMovies: [],
    },
    {
        title: 'Batman',
        year: 2008,
        personRoleMovies: [],
    },
    {
        title: 'LOTR',
        year: 2000,
        personRoleMovies: [],
    },
];
const people = [
    {
        id: 1,
        name: 'Bruce',
        lastName: 'Wayne',
        age: 45,
    },
    {
        id: 3,
        name: 'Lola',
        lastName: 'Miers',
        age: 29,
    },
    {
        id: 6,
        name: 'Austin',
        lastName: 'Powers',
        age: 60,
    },
];
const roles = [
    {
        id: 1,
        name: 'Actor/Actress',
    },
    {
        id: 3,
        name: 'Producer',
    },
    {
        id: 6,
        name: 'Director',
    },
];

module.exports = {
    roles,
    movies,
    people,
};
