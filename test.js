import test from 'ava';
import Vinyl from 'vinyl';
import m from '.';

test.cb(t => {
	const stream = m();

	stream.once('data', file => {
		t.is(file.contents.toString(), 'body{}');
		t.end();
	});

	stream.end(new Vinyl({
		contents: Buffer.from('body{/**/}')
	}));
});
