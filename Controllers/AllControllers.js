const { Person, Movie, Role, PersonRoleMovie } = require('../db');
let movieController = {
    getMovies: async function () {
        try {
            const allMovies = await Movie.findAll({
                include: {
                    model: PersonRoleMovie,
                    include: [
                        {
                            model: Person,
                            attributes: {
                                exclude: ['id'],
                            },
                        },
                        {
                            model: Role,

                            attributes: {
                                exclude: ['id'],
                            },
                        },
                    ],
                    attributes: {
                        exclude: ['personId', 'movieId', 'roleId'],
                    },
                },
            });

            return allMovies;
        } catch (error) {
            console.log(error);
        }
    },

    getPerson: async function (role) {
        try {
            const allPersons = await Person.findAll({
                include: {
                    model: PersonRoleMovie,
                    include: [
                        role
                            ? {
                                  model: Role,
                                  where: { name: role },
                                  attributes: {
                                      exclude: ['id'],
                                  },
                              }
                            : {
                                  model: Role,
                                  attributes: {
                                      exclude: ['id'],
                                  },
                              },
                        {
                            model: Movie,
                            attributes: {
                                exclude: ['id'],
                            },
                        },
                    ],
                    attributes: {
                        exclude: ['personId', 'movieId', 'roleId'],
                    },
                },
            });
            const json = allPersons.map((p) => p.toJSON());
            const filter = json.filter((j) => j.personRoleMovies.length);
            return filter;
        } catch (error) {
            console.log(error);
        }
    },
};
module.exports = movieController;
