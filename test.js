import {Buffer} from 'node:buffer';
import test from 'ava';
import Vinyl from 'vinyl';
import {pEvent} from 'p-event';
import stripCssComments from './index.js';

test('main', async t => {
	const stream = stripCssComments({whitespace: true});
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('body{/* d */}'),
	}));

	const file = await dataPromise;
	t.is(file.contents.toString(), 'body{}');
});

test('whitespace option', async t => {
	const stream = stripCssComments({whitespace: false});
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('body{/* foo */}'),
	}));

	const file = await dataPromise;
	t.is(file.contents.toString(), 'body{}');
});
