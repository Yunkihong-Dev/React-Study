const { STRING, UUIDV4, UUID, Model } = require("sequelize")





module.exports = class Todo extends Model {
    static init(sequelize){
      return super.init(
        {
          id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4
          },
          userId: {
            type: STRING(100),
            allowNull: false,
            unique: true,
            comment: "유저 ID"
          },
          title: {
            type: STRING(100),
            allowNull: false,
            comment: "제목"
          },
          content: {
            type: STRING(200),
            allowNull:true,
            content:"내용"
          }
        },
        {
          modelName: "Todo", // 모델명
          tableName: "todo", // 테이블명
          charset: 'utf8', // 언어지원
          timestamps: true, // 생성일 갱신일
          sequelize // 기본 옵션
        }
      )
    }
  }
  