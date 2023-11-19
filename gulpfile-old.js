const { src, dest, series, parallel } = require('gulp');
const pug = require('gulp-pug');
import {deleteAsync} from 'del';


function clean(cb) {
  cb();
}

function html() {
	console.log(123)
	return src('./src/*.pug')
		.pipe(
			pug({
				pretty: true
			})
		)
		.pipe(dest('./dist'));
}


function javascript(cb) {
	cb();
  }
  
function css(cb) {
	cb();
}

const build = series(clean, parallel(html, javascript, css))

exports.build = parallel(html, javascript, css);
exports.default = series(clean, build);