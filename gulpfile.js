const { src,dest, watch } = require("gulp");
const pug = require("gulp-pug");


// pugをコンパイルする
const compilePug = () =>
   src("pug/*.pug")
   .pipe(
       pug({
           pretty: true
       })
   )
   .pipe(dest("cp_pug"));

// pugファイルを監視
const watchPugFiles = () =>
   watch("pug/*.pug", compilePug);

// npx gulpで実行される関数
exports.default = () =>

   watchPugFiles();
