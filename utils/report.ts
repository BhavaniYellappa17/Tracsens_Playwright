import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
 
class MyReporter implements Reporter {
 
  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Test ${test.title} finished with status ${result.status}`);
  }
}
 
export default MyReporter;