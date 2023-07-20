const { Model, UUID, UUIDV4, STRING } = require("sequelize");

module.exports = class User extends Model {
  static init(sequelize){
    return super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4
        },
        email: {
          type: STRING(100),
          allowNull: false,
          unique: true,
          comment: "유저 이메일"
        },
        password: {
          type: STRING(100),
          allowNull: false,
          comment: "유저 비밀번호"
        }
      },
      {
        modelName: "User", // 모델명
        tableName: "users", // 테이블명
        charset: 'utf8', // 언어지원
        timestamps: true, // 생성일 갱신일
        sequelize // 기본 옵션
      }
    )
  }
}
