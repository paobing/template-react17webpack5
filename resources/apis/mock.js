import { mock } from "mockjs";

mock('/user/info', 'get', {
    "cn_name": "@cname",
    "time": "@datetime",
    "now": "@now",
    "image": "@image('1600x900')",
    "area": "@city",
    "ip": "@ip",
    "upper": "@upper(@name)",
    "lists|20": [
        {
            "id|+1": 1,
            "name": "@name",
            "age|10-60": 1,
        }
    ]
})