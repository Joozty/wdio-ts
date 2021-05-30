import {resolve} from "path";

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        expect(require.resolve("@test/core")).toBe(resolve(__dirname, '../../../core/dist/index.js'))
    });
});

