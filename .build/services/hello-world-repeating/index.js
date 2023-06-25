"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const run = async (event, context) => {
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};
exports.run = run;
//# sourceMappingURL=index.js.map