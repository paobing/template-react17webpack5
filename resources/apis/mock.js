import { mock } from "mockjs";

mock('/user/info', 'get', {
    name: "@cname",
    ip: "@ip",
    "lists|20": [
        {"id|+1": 1, name: "@name", "age|10-60": 1}
    ]
})