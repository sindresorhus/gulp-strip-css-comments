import test from 'ava';
import Vinyl from 'vinyl';
import pEvent from 'p-event';
import stripCssComments from '.';

test('main', async t => {
	const stream = stripCssComments();
	const dataPromise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('body{/**/}')
	}));

	const file = await dataPromise;
	t.is(file.contents.toString(), 'body{}');
});
