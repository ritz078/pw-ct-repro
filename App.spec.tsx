import { test, expect } from '@playwright/experimental-ct-react17';
import {Example, otherExport} from "./testComponents";

console.log(otherExport) // If I comment this line, the test will pass

test('should work', async ({ mount }) => {
    const component = await mount(<Example />);
    await expect(component).toContainText('Learn React');
});
