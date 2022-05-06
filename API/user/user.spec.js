const request = require("supertest");
const should = require("should");
const app = require("../../");
const models = require("../../models");

describe("GET /user는", () => {
    const user = [{ name: "test1" }, { name: "test2" }, { name: "test3" }];
    before(() => models.sequelize.sync({ force: true }));
    before(() => { return models.User.bulkCreate(user) });

    describe("성공시", () => {
        it("유저 객체를 담은 배열로 응답한다.", (done) => {
            request(app)
                .get("/user")
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });
    });
});

describe("POST /login", () => {
    const user = [{ name: "test1" }, { name: "test2" }, { name: "test3" }];
    before(() => models.sequelize.sync({ force: true }));
    before(() => { return models.User.bulkCreate(user) });

    describe("성공시", () => {
        let body,
            name = "test1";
        before((done) => {
            request(app)
                .post("/user/login")
                .send({ name })
                .expect(201)
                .end((err, res) => {
                    body = res.body;
                    done();
                });
        });
        it("로그인된 유저 객체를 반환한다.", () => {
            body.should.have.property("id", 1);
        });
        it("입력한 name을 반환한다.", () => {
            body.should.have.property("name", name);
        });
    });
    describe("실패시", () => {
        it("name 파라미터 누락시 400을 반환한다.", (done) => {
            request(app).post("/user/login").send({}).expect(400).end(done);
        });
    });
});