#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HlsProxyStack } from '../lib/hls-proxy-stack';

const app = new cdk.App();
new HlsProxyStack(app, 'HlsProxyStack');
