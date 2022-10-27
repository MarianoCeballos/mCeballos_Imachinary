const { Op } = require('sequelize');
const { Person, Movie, Role, PersonRoleMovie } = require('../db');
const { roles, movies, people } = require('./Seeder');
let movieController = {
    seedDb: async function () {
        const moviesExists = await Movie.findAll();
        const peopleExists = await Person.findAll();
        const rolesExists = await Role.findAll();
        if (moviesExists.length) {
            return false;
        } else {
            movies.forEach(async (element) => {
                await Movie.create(element);
            });
        }

        if (peopleExists.length) {
            return false;
        } else {
            people.forEach(async (element) => {
                await Person.create(element);
            });
        }

        if (rolesExists.length) {
            return false;
        } else {
            roles.forEach(async (element) => {
                await Role.create(element);
            });
        }
    },

    getMovies: async function (role, person, title) {
        try {
            const allMovies = await Movie.findAll({
                where: title
                    ? {
                          title: {
                              [Op.iLike]: '%' + title + '%',
                          },
                      }
                    : {},
                include: {
                    model: PersonRoleMovie,
                    attributes: {
                        exclude: ['id'],
                    },
                    include: [
                        person
                            ? {
                                  model: Person,
                                  where: {
                                      name: {
                                          [Op.iLike]: '%' + person + '%',
                                      },
                                  },
                                  attributes: {
                                      exclude: ['id'],
                                  },
                              }
                            : {
                                  model: Person,
                                  attributes: {
                                      exclude: ['id'],
                                  },
                              },
                        role
                            ? {
                                  model: Role,
                                  where: {
                                      name: {
                                          [Op.iLike]: '%' + role + '%',
                                      },
                                  },
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
                    ],
                    attributes: {
                        exclude: ['personId', 'movieId', 'roleId'],
                    },
                },
                attributes: {
                    exclude: ['id'],
                },
            });

            const json = allMovies.map((m) => m.toJSON());
            const filter = json.filter((j) => j.personRoleMovies.length);
            return filter;
        } catch (error) {
            console.log(error);
        }
    },

    getPerson: async function (name, role, title) {
        try {
            const allPersons = await Person.findAll({
                where: name
                    ? {
                          [Op.or]: [
                              {
                                  name: {
                                      [Op.iLike]: '%' + name + '%',
                                  },
                              },
                              {
                                  lastName: {
                                      [Op.iLike]: '%' + name + '%',
                                  },
                              },
                          ],
                      }
                    : {},
                include: {
                    model: PersonRoleMovie,
                    attributes: {
                        exclude: ['id'],
                    },
                    include: [
                        title
                            ? {
                                  model: Movie,
                                  where: {
                                      title: {
                                          [Op.iLike]: '%' + title + '%',
                                      },
                                  },
                                  attributes: {
                                      exclude: ['id'],
                                  },
                              }
                            : {
                                  model: Movie,
                                  attributes: {
                                      exclude: ['id'],
                                  },
                              },
                        role
                            ? {
                                  model: Role,
                                  where: {
                                      name: {
                                          [Op.iLike]: '%' + role + '%',
                                      },
                                  },
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
                    ],
                    attributes: {
                        exclude: ['personId', 'movieId', 'roleId'],
                    },
                },
                attributes: {
                    exclude: ['id'],
                },
            });

            const json = allPersons.map((p) => p.toJSON());
            const filter = json.filter((j) => j.personRoleMovies.length);
            return filter;
        } catch (error) {
            console.log(error);
        }
    },
    getRole: async function () {
        try {
            const allRoles = await Role.findAll();
            return allRoles;
        } catch (error) {}
    },
};
module.exports = movieController;
