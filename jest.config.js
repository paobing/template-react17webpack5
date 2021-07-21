module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "resources/**/*.{js,jsx}"
    ],
    // 覆盖率阈值配置(https://doc.ebichu.cc/jest/docs/en/configuration.html)
    // coverageThreshold: {
    //   // 全局文件匹配覆盖率要求
    //   global: {
    //     branches: 50,
    //     functions: 50,
    //     lines: 50,
    //     statements: 50
    //   },
    //   // 指定文件覆盖率要求
    //   "./src/components/**/*.js": {
    //     branches: 100,
    //     functions: 100,
    //     lines: 100,
    //     statements: 100
    //   }
    // },
    moduleNameMapper: {
        // [静态文件处理：可以mock或者进行transform](https://jestjs.io/zh-Hans/docs/webpack#%E5%A4%84%E7%90%86%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6)
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js", // 静态资源使用fileMock进行跳过
        "\\.(css|less|scss|styl)$": "<rootDir>/test/__mocks__/styleMock.js", // 样式表使用styleMock进行跳过
        "@/(.*)": "<rootDir>/resources/$1", // 处理@别名
    },
    /**
     * Default: 'node'
    * Or add `@jest-environment jsdom` into any test files (https://jestjs.io/docs/configuration#testenvironment-string)
    */
    testEnvironment: 'jsdom',
    // 在每个测试文件执行之前，运行一些代码以配置或设置测试框架
    setupFilesAfterEnv: ['./test/setupTests.js'],
    testMatch: [
        '**/__tests__/**/*.js?(x)',
        '**/?(*.)(spec|test).js?(x)'
    ],
    clearMocks: true,
    // notify: true,
    // notifyMode: 'always'
    // moduleDirectories: ["node_modules", "src"]
}