module.exports = (sequelize, dataTypes) => {
    const Project = sequelize.define("project", {
        project_name:
        type: dataTypes.INTEGER
    },
    attr:
    type. dataTypes.STRING

    )

    return Project;
}


Project.associate = models => {
    Project.hasMany();
}