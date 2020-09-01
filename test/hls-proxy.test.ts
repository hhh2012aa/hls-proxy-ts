import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HlsProxy from '../lib/hls-proxy-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HlsProxy.HlsProxyStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
