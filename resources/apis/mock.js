import { mock } from "mockjs";

mock("/system/list", 'post', {
    "list|20-100": {
        id: '@number',
        name: '@string',
        bugs: '@list'
    }
})