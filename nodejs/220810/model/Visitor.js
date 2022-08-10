const Visitor = (Sequelize, DataTypes) => {
    //Sequelize는 model/index.js 에서의 sequlize
    //datatype는 model/index.js 에서의 Sequlize
    const model = Sequelize.define(
        'visitor', 
        {
            // creat ~~ (id int not null auto_increment primary key)
            id: {
                type: DataTypes.INTEGER, 
                allownull: false,
                primaryKey: true, 
                autoIncrement: true,
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10), 
                allownull: false,
            }, 
            comment: { // comment mediumtext
                type: DataTypes.TEXT('medium'),
            }
        }, 
        {
            tableName: 'visitor', 
            freezeTableName: true, 
            // freezeTableName을 true로 설정하면 이름을 복수로 설정하지 않는다 
            timestamps: false,
            // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다
        }
    ); 
    return model;
    /* define함수 인자 3개 
    1. 모델(테이블)이름 설정 -> Visitor 
    2. 컬럼 정의 -> (id, name, comment)
    3. 모델의 옵션 정의 
     */
}

module.exports = Visitor;