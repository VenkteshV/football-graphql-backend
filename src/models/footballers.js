/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var footballers = sequelize.define('footballers', {
    name: {
      type: DataTypes.STRING(25),
      allowNull: true,
      field: 'Name',
      primaryKey: true
    },
    nationality: {
      type: DataTypes.STRING(19),
      allowNull: true,
      field: 'Nationality'
    },
    nationalPosition: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'National_Position'
    },
    nationalKit: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'National_Kit'
    },
    club: {
      type: DataTypes.STRING(17),
      allowNull: true,
      field: 'Club'
    },
    clubPosition: {
      type: DataTypes.STRING(3),
      allowNull: true,
      field: 'Club_Position'
    },
    clubKit: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'Club_Kit'
    },
    clubJoining: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Club_Joining'
    },
    contractExpiry: {
      type: DataTypes.STRING(4),
      allowNull: true,
      field: 'Contract_Expiry'
    },
    rating: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Rating'
    },
    height: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'Height'
    },
    weight: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Weight'
    },
    prefferedFoot: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'Preffered_Foot'
    },
    birthDate: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'Birth_Date'
    },
    age: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Age'
    },
    prefferedPosition: {
      type: DataTypes.STRING(9),
      allowNull: true,
      field: 'Preffered_Position'
    },
    workRate: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'Work_Rate'
    },
    weakFoot: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'Weak_foot'
    },
    skillMoves: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'Skill_Moves'
    },
    ballControl: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Ball_Control'
    },
    dribbling: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Dribbling'
    },
    marking: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Marking'
    },
    slidingTackle: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Sliding_Tackle'
    },
    standingTackle: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Standing_Tackle'
    },
    aggression: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Aggression'
    },
    reactions: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Reactions'
    },
    attackingPosition: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Attacking_Position'
    },
    interceptions: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Interceptions'
    },
    vision: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Vision'
    },
    composure: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Composure'
    },
    crossing: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Crossing'
    },
    shortPass: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Short_Pass'
    },
    longPass: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Long_Pass'
    },
    acceleration: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Acceleration'
    },
    speed: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Speed'
    },
    stamina: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Stamina'
    },
    strength: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Strength'
    },
    balance: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Balance'
    },
    agility: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Agility'
    },
    jumping: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Jumping'
    },
    heading: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Heading'
    },
    shotPower: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Shot_Power'
    },
    finishing: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Finishing'
    },
    longShots: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Long_Shots'
    },
    curve: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Curve'
    },
    freekickAccuracy: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Freekick_Accuracy'
    },
    penalties: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Penalties'
    },
    volleys: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'Volleys'
    },
    gkPositioning: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'GK_Positioning'
    },
    gkDiving: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'GK_Diving'
    },
    gkKicking: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'GK_Kicking'
    },
    gkHandling: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'GK_Handling'
    },
    gkReflexes: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'GK_Reflexes'
    }
  }, {
    timestamps: false,
    tableName: 'footballers'
  });
  return footballers;
};
