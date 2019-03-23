import { assert } from 'chai';
import ftm from '../src';

describe('Awesome test.', () => {
  it('should test ftm minutes', () => {
    const expectedVal = '35 minutes ago';
    assert(expectedVal == ftm('Sat Mar 23 2019 23:32:01 GMT+0530 (India Standard Time)', 'Sun Mar 24 2019 00:07:32 GMT+0530 (India Standard Time)'), 'Not Correct!');
  });

  it('should test awesome function', () => {
    const expectedVal = 'In 24 minutes';
    console.log(ftm('Sat Mar 24 2019 0:32:01 GMT+0530 (India Standard Time)', 'Sun Mar 24 2019 00:07:32 GMT+0530 (India Standard Time)'));
    assert(expectedVal == ftm('Sat Mar 24 2019 0:32:01 GMT+0530 (India Standard Time)', 'Sun Mar 24 2019 00:07:32 GMT+0530 (India Standard Time)'), 'Not Correct!');
  });
});
